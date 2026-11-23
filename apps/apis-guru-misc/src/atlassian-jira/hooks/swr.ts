import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRestKey() {
  return ['rest'] as const
}

export function getGetRestApi3AnnouncementBannerKey() {
  return ['rest', '/rest/api/3/announcementBanner'] as const
}

export function useGetRestApi3AnnouncementBanner<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['announcementBanner']['$get']>>
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
        ? getGetRestApi3AnnouncementBannerKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['announcementBanner']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].announcementBanner.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3AnnouncementBanner<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['announcementBanner']['$get']>>
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
        ? getGetRestApi3AnnouncementBannerKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['announcementBanner']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].announcementBanner.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3AnnouncementBannerKey() {
  return ['rest', '/rest/api/3/announcementBanner', 'PUT'] as const
}

export function usePutRestApi3AnnouncementBanner<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['announcementBanner']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['announcementBanner']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3AnnouncementBannerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['announcementBanner']['$put']> },
      ) => parseResponse(client.rest.api['3'].announcementBanner.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3AppFieldValueKey() {
  return ['rest', '/rest/api/3/app/field/value', 'POST'] as const
}

export function usePostRestApi3AppFieldValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['app']['field']['value']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['app']['field']['value']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3AppFieldValueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['app']['field']['value']['$post']>
        },
      ) => parseResponse(client.rest.api['3'].app.field.value.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3AppFieldFieldIdOrKeyContextConfigurationKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['context']['configuration']['$get']
  >,
) {
  return ['rest', '/rest/api/3/app/field/:fieldIdOrKey/context/configuration', args] as const
}

export function useGetRestApi3AppFieldFieldIdOrKeyContextConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['context']['configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['context']['configuration']['$get']
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
        ? getGetRestApi3AppFieldFieldIdOrKeyContextConfigurationKey(args)
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
                (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['context']['configuration']['$get']
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
          client.rest.api['3'].app.field[':fieldIdOrKey'].context.configuration.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3AppFieldFieldIdOrKeyContextConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['context']['configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['context']['configuration']['$get']
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
        ? getGetRestApi3AppFieldFieldIdOrKeyContextConfigurationKey(args)
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
                (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['context']['configuration']['$get']
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
          client.rest.api['3'].app.field[':fieldIdOrKey'].context.configuration.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3AppFieldFieldIdOrKeyContextConfigurationKey() {
  return ['rest', '/rest/api/3/app/field/:fieldIdOrKey/context/configuration', 'PUT'] as const
}

export function usePutRestApi3AppFieldFieldIdOrKeyContextConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['context']['configuration']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['context']['configuration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3AppFieldFieldIdOrKeyContextConfigurationKey()
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
            (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['context']['configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].app.field[':fieldIdOrKey'].context.configuration.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3AppFieldFieldIdOrKeyValueKey() {
  return ['rest', '/rest/api/3/app/field/:fieldIdOrKey/value', 'PUT'] as const
}

export function usePutRestApi3AppFieldFieldIdOrKeyValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['value']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3AppFieldFieldIdOrKeyValueKey()
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
            (typeof client.rest.api)['3']['app']['field'][':fieldIdOrKey']['value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].app.field[':fieldIdOrKey'].value.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ApplicationPropertiesKey(
  args: InferRequestType<(typeof client.rest.api)['3']['application-properties']['$get']>,
) {
  return ['rest', '/rest/api/3/application-properties', args] as const
}

export function useGetRestApi3ApplicationProperties<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['application-properties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['application-properties']['$get']>>
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
        ? getGetRestApi3ApplicationPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['application-properties']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3']['application-properties'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ApplicationProperties<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['application-properties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['application-properties']['$get']>>
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
        ? getGetRestApi3ApplicationPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['application-properties']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3']['application-properties'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ApplicationPropertiesAdvancedSettingsKey() {
  return ['rest', '/rest/api/3/application-properties/advanced-settings'] as const
}

export function useGetRestApi3ApplicationPropertiesAdvancedSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['application-properties']['advanced-settings']['$get']
            >
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
        ? getGetRestApi3ApplicationPropertiesAdvancedSettingsKey()
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
                (typeof client.rest.api)['3']['application-properties']['advanced-settings']['$get']
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
          client.rest.api['3']['application-properties']['advanced-settings'].$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ApplicationPropertiesAdvancedSettings<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['application-properties']['advanced-settings']['$get']
            >
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
        ? getGetRestApi3ApplicationPropertiesAdvancedSettingsKey()
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
                (typeof client.rest.api)['3']['application-properties']['advanced-settings']['$get']
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
          client.rest.api['3']['application-properties']['advanced-settings'].$get(
            undefined,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3ApplicationPropertiesIdKey() {
  return ['rest', '/rest/api/3/application-properties/:id', 'PUT'] as const
}

export function usePutRestApi3ApplicationPropertiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['application-properties'][':id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['application-properties'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ApplicationPropertiesIdKey()
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
            (typeof client.rest.api)['3']['application-properties'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3']['application-properties'][':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ApplicationroleKey() {
  return ['rest', '/rest/api/3/applicationrole'] as const
}

export function useGetRestApi3Applicationrole<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['applicationrole']['$get']>>
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
        ? getGetRestApi3ApplicationroleKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['applicationrole']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].applicationrole.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Applicationrole<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['applicationrole']['$get']>>
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
        ? getGetRestApi3ApplicationroleKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['applicationrole']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].applicationrole.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ApplicationroleKeyKey(
  args: InferRequestType<(typeof client.rest.api)['3']['applicationrole'][':key']['$get']>,
) {
  return ['rest', '/rest/api/3/applicationrole/:key', args] as const
}

export function useGetRestApi3ApplicationroleKey<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['applicationrole'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['applicationrole'][':key']['$get']>>
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
        ? getGetRestApi3ApplicationroleKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['applicationrole'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].applicationrole[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ApplicationroleKey<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['applicationrole'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['applicationrole'][':key']['$get']>>
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
        ? getGetRestApi3ApplicationroleKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['applicationrole'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].applicationrole[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3AttachmentContentIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['attachment']['content'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/attachment/content/:id', args] as const
}

export function useGetRestApi3AttachmentContentId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['attachment']['content'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['attachment']['content'][':id']['$get']>
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
        ? getGetRestApi3AttachmentContentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['attachment']['content'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].attachment.content[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3AttachmentContentId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['attachment']['content'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['attachment']['content'][':id']['$get']>
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
        ? getGetRestApi3AttachmentContentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['attachment']['content'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].attachment.content[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3AttachmentMetaKey() {
  return ['rest', '/rest/api/3/attachment/meta'] as const
}

export function useGetRestApi3AttachmentMeta<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['attachment']['meta']['$get']>>
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
        ? getGetRestApi3AttachmentMetaKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['attachment']['meta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].attachment.meta.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3AttachmentMeta<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['attachment']['meta']['$get']>>
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
        ? getGetRestApi3AttachmentMetaKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['attachment']['meta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].attachment.meta.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3AttachmentThumbnailIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['attachment']['thumbnail'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/attachment/thumbnail/:id', args] as const
}

export function useGetRestApi3AttachmentThumbnailId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['attachment']['thumbnail'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['attachment']['thumbnail'][':id']['$get']>
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
        ? getGetRestApi3AttachmentThumbnailIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['attachment']['thumbnail'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].attachment.thumbnail[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3AttachmentThumbnailId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['attachment']['thumbnail'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['attachment']['thumbnail'][':id']['$get']>
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
        ? getGetRestApi3AttachmentThumbnailIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['attachment']['thumbnail'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].attachment.thumbnail[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3AttachmentIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['attachment'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/attachment/:id', args] as const
}

export function useGetRestApi3AttachmentId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['attachment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['attachment'][':id']['$get']>>
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
        ? getGetRestApi3AttachmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['attachment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].attachment[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3AttachmentId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['attachment'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['attachment'][':id']['$get']>>
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
        ? getGetRestApi3AttachmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['attachment'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].attachment[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRestApi3AttachmentIdKey() {
  return ['rest', '/rest/api/3/attachment/:id', 'DELETE'] as const
}

export function useDeleteRestApi3AttachmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['attachment'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['attachment'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3AttachmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['attachment'][':id']['$delete']> },
      ) => parseResponse(client.rest.api['3'].attachment[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3AttachmentIdExpandHumanKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['attachment'][':id']['expand']['human']['$get']
  >,
) {
  return ['rest', '/rest/api/3/attachment/:id/expand/human', args] as const
}

export function useGetRestApi3AttachmentIdExpandHuman<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['attachment'][':id']['expand']['human']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['attachment'][':id']['expand']['human']['$get']
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
        ? getGetRestApi3AttachmentIdExpandHumanKey(args)
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
                (typeof client.rest.api)['3']['attachment'][':id']['expand']['human']['$get']
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
          client.rest.api['3'].attachment[':id'].expand.human.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3AttachmentIdExpandHuman<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['attachment'][':id']['expand']['human']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['attachment'][':id']['expand']['human']['$get']
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
        ? getGetRestApi3AttachmentIdExpandHumanKey(args)
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
                (typeof client.rest.api)['3']['attachment'][':id']['expand']['human']['$get']
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
          client.rest.api['3'].attachment[':id'].expand.human.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3AttachmentIdExpandRawKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['attachment'][':id']['expand']['raw']['$get']
  >,
) {
  return ['rest', '/rest/api/3/attachment/:id/expand/raw', args] as const
}

export function useGetRestApi3AttachmentIdExpandRaw<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['attachment'][':id']['expand']['raw']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['attachment'][':id']['expand']['raw']['$get']
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
        ? getGetRestApi3AttachmentIdExpandRawKey(args)
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
                (typeof client.rest.api)['3']['attachment'][':id']['expand']['raw']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].attachment[':id'].expand.raw.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3AttachmentIdExpandRaw<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['attachment'][':id']['expand']['raw']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['attachment'][':id']['expand']['raw']['$get']
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
        ? getGetRestApi3AttachmentIdExpandRawKey(args)
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
                (typeof client.rest.api)['3']['attachment'][':id']['expand']['raw']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].attachment[':id'].expand.raw.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3AuditingRecordKey(
  args: InferRequestType<(typeof client.rest.api)['3']['auditing']['record']['$get']>,
) {
  return ['rest', '/rest/api/3/auditing/record', args] as const
}

export function useGetRestApi3AuditingRecord<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['auditing']['record']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['auditing']['record']['$get']>>
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
        ? getGetRestApi3AuditingRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['auditing']['record']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].auditing.record.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3AuditingRecord<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['auditing']['record']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['auditing']['record']['$get']>>
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
        ? getGetRestApi3AuditingRecordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['auditing']['record']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].auditing.record.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3AvatarTypeSystemKey(
  args: InferRequestType<(typeof client.rest.api)['3']['avatar'][':type']['system']['$get']>,
) {
  return ['rest', '/rest/api/3/avatar/:type/system', args] as const
}

export function useGetRestApi3AvatarTypeSystem<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['avatar'][':type']['system']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['avatar'][':type']['system']['$get']>>
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
        ? getGetRestApi3AvatarTypeSystemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['avatar'][':type']['system']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].avatar[':type'].system.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3AvatarTypeSystem<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['avatar'][':type']['system']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['avatar'][':type']['system']['$get']>>
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
        ? getGetRestApi3AvatarTypeSystemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['avatar'][':type']['system']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].avatar[':type'].system.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3CommentListKey() {
  return ['rest', '/rest/api/3/comment/list', 'POST'] as const
}

export function usePostRestApi3CommentList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['comment']['list']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['comment']['list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3CommentListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['comment']['list']['$post']> },
      ) => parseResponse(client.rest.api['3'].comment.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3CommentCommentIdPropertiesKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['comment'][':commentId']['properties']['$get']
  >,
) {
  return ['rest', '/rest/api/3/comment/:commentId/properties', args] as const
}

export function useGetRestApi3CommentCommentIdProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['comment'][':commentId']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['comment'][':commentId']['properties']['$get']
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
        ? getGetRestApi3CommentCommentIdPropertiesKey(args)
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
                (typeof client.rest.api)['3']['comment'][':commentId']['properties']['$get']
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
          client.rest.api['3'].comment[':commentId'].properties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3CommentCommentIdProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['comment'][':commentId']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['comment'][':commentId']['properties']['$get']
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
        ? getGetRestApi3CommentCommentIdPropertiesKey(args)
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
                (typeof client.rest.api)['3']['comment'][':commentId']['properties']['$get']
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
          client.rest.api['3'].comment[':commentId'].properties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3CommentCommentIdPropertiesPropertyKeyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$get']
  >,
) {
  return ['rest', '/rest/api/3/comment/:commentId/properties/:propertyKey', args] as const
}

export function useGetRestApi3CommentCommentIdPropertiesPropertyKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$get']
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
        ? getGetRestApi3CommentCommentIdPropertiesPropertyKeyKey(args)
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
                (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$get']
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
          client.rest.api['3'].comment[':commentId'].properties[':propertyKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3CommentCommentIdPropertiesPropertyKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$get']
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
        ? getGetRestApi3CommentCommentIdPropertiesPropertyKeyKey(args)
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
                (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$get']
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
          client.rest.api['3'].comment[':commentId'].properties[':propertyKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3CommentCommentIdPropertiesPropertyKeyKey() {
  return ['rest', '/rest/api/3/comment/:commentId/properties/:propertyKey', 'PUT'] as const
}

export function usePutRestApi3CommentCommentIdPropertiesPropertyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3CommentCommentIdPropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].comment[':commentId'].properties[':propertyKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3CommentCommentIdPropertiesPropertyKeyKey() {
  return ['rest', '/rest/api/3/comment/:commentId/properties/:propertyKey', 'DELETE'] as const
}

export function useDeleteRestApi3CommentCommentIdPropertiesPropertyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3CommentCommentIdPropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['comment'][':commentId']['properties'][':propertyKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].comment[':commentId'].properties[':propertyKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3ComponentKey() {
  return ['rest', '/rest/api/3/component', 'POST'] as const
}

export function usePostRestApi3Component<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['component']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['component']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ComponentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['component']['$post']> },
      ) => parseResponse(client.rest.api['3'].component.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ComponentIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['component'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/component/:id', args] as const
}

export function useGetRestApi3ComponentId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['component'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['component'][':id']['$get']>>
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
        ? getGetRestApi3ComponentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['component'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].component[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ComponentId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['component'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['component'][':id']['$get']>>
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
        ? getGetRestApi3ComponentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['component'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].component[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3ComponentIdKey() {
  return ['rest', '/rest/api/3/component/:id', 'PUT'] as const
}

export function usePutRestApi3ComponentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['component'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['component'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ComponentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['component'][':id']['$put']> },
      ) => parseResponse(client.rest.api['3'].component[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3ComponentIdKey() {
  return ['rest', '/rest/api/3/component/:id', 'DELETE'] as const
}

export function useDeleteRestApi3ComponentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['component'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['component'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3ComponentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['component'][':id']['$delete']> },
      ) => parseResponse(client.rest.api['3'].component[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ComponentIdRelatedIssueCountsKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['component'][':id']['relatedIssueCounts']['$get']
  >,
) {
  return ['rest', '/rest/api/3/component/:id/relatedIssueCounts', args] as const
}

export function useGetRestApi3ComponentIdRelatedIssueCounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['component'][':id']['relatedIssueCounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['component'][':id']['relatedIssueCounts']['$get']
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
        ? getGetRestApi3ComponentIdRelatedIssueCountsKey(args)
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
                (typeof client.rest.api)['3']['component'][':id']['relatedIssueCounts']['$get']
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
          client.rest.api['3'].component[':id'].relatedIssueCounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ComponentIdRelatedIssueCounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['component'][':id']['relatedIssueCounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['component'][':id']['relatedIssueCounts']['$get']
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
        ? getGetRestApi3ComponentIdRelatedIssueCountsKey(args)
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
                (typeof client.rest.api)['3']['component'][':id']['relatedIssueCounts']['$get']
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
          client.rest.api['3'].component[':id'].relatedIssueCounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ConfigurationKey() {
  return ['rest', '/rest/api/3/configuration'] as const
}

export function useGetRestApi3Configuration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['configuration']['$get']>>
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
        ? getGetRestApi3ConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Configuration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['configuration']['$get']>>
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
        ? getGetRestApi3ConfigurationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].configuration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ConfigurationTimetrackingKey() {
  return ['rest', '/rest/api/3/configuration/timetracking'] as const
}

export function useGetRestApi3ConfigurationTimetracking<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['configuration']['timetracking']['$get']>
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
        ? getGetRestApi3ConfigurationTimetrackingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['configuration']['timetracking']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.rest.api['3'].configuration.timetracking.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ConfigurationTimetracking<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['configuration']['timetracking']['$get']>
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
        ? getGetRestApi3ConfigurationTimetrackingKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['configuration']['timetracking']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.rest.api['3'].configuration.timetracking.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3ConfigurationTimetrackingKey() {
  return ['rest', '/rest/api/3/configuration/timetracking', 'PUT'] as const
}

export function usePutRestApi3ConfigurationTimetracking<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['configuration']['timetracking']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['configuration']['timetracking']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ConfigurationTimetrackingKey()
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
            (typeof client.rest.api)['3']['configuration']['timetracking']['$put']
          >
        },
      ) => parseResponse(client.rest.api['3'].configuration.timetracking.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ConfigurationTimetrackingListKey() {
  return ['rest', '/rest/api/3/configuration/timetracking/list'] as const
}

export function useGetRestApi3ConfigurationTimetrackingList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['configuration']['timetracking']['list']['$get']
            >
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
        ? getGetRestApi3ConfigurationTimetrackingListKey()
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
                (typeof client.rest.api)['3']['configuration']['timetracking']['list']['$get']
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
          client.rest.api['3'].configuration.timetracking.list.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ConfigurationTimetrackingList<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['configuration']['timetracking']['list']['$get']
            >
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
        ? getGetRestApi3ConfigurationTimetrackingListKey()
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
                (typeof client.rest.api)['3']['configuration']['timetracking']['list']['$get']
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
          client.rest.api['3'].configuration.timetracking.list.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ConfigurationTimetrackingOptionsKey() {
  return ['rest', '/rest/api/3/configuration/timetracking/options'] as const
}

export function useGetRestApi3ConfigurationTimetrackingOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['configuration']['timetracking']['options']['$get']
            >
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
        ? getGetRestApi3ConfigurationTimetrackingOptionsKey()
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
                (typeof client.rest.api)['3']['configuration']['timetracking']['options']['$get']
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
          client.rest.api['3'].configuration.timetracking.options.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ConfigurationTimetrackingOptions<
  TError = unknown,
>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['configuration']['timetracking']['options']['$get']
            >
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
        ? getGetRestApi3ConfigurationTimetrackingOptionsKey()
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
                (typeof client.rest.api)['3']['configuration']['timetracking']['options']['$get']
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
          client.rest.api['3'].configuration.timetracking.options.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3ConfigurationTimetrackingOptionsKey() {
  return ['rest', '/rest/api/3/configuration/timetracking/options', 'PUT'] as const
}

export function usePutRestApi3ConfigurationTimetrackingOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['configuration']['timetracking']['options']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['configuration']['timetracking']['options']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ConfigurationTimetrackingOptionsKey()
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
            (typeof client.rest.api)['3']['configuration']['timetracking']['options']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].configuration.timetracking.options.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3CustomFieldOptionIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['customFieldOption'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/customFieldOption/:id', args] as const
}

export function useGetRestApi3CustomFieldOptionId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['customFieldOption'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['customFieldOption'][':id']['$get']>>
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
        ? getGetRestApi3CustomFieldOptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['customFieldOption'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].customFieldOption[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3CustomFieldOptionId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['customFieldOption'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['customFieldOption'][':id']['$get']>>
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
        ? getGetRestApi3CustomFieldOptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['customFieldOption'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].customFieldOption[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3DashboardKey(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard']['$get']>,
) {
  return ['rest', '/rest/api/3/dashboard', args] as const
}

export function useGetRestApi3Dashboard<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard']['$get']>>
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
        ? getGetRestApi3DashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].dashboard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Dashboard<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard']['$get']>>
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
        ? getGetRestApi3DashboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].dashboard.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3DashboardKey() {
  return ['rest', '/rest/api/3/dashboard', 'POST'] as const
}

export function usePostRestApi3Dashboard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['dashboard']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3DashboardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['dashboard']['$post']> },
      ) => parseResponse(client.rest.api['3'].dashboard.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3DashboardGadgetsKey() {
  return ['rest', '/rest/api/3/dashboard/gadgets'] as const
}

export function useGetRestApi3DashboardGadgets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard']['gadgets']['$get']>>
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
        ? getGetRestApi3DashboardGadgetsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard']['gadgets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].dashboard.gadgets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3DashboardGadgets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard']['gadgets']['$get']>>
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
        ? getGetRestApi3DashboardGadgetsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard']['gadgets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].dashboard.gadgets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3DashboardSearchKey(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard']['search']['$get']>,
) {
  return ['rest', '/rest/api/3/dashboard/search', args] as const
}

export function useGetRestApi3DashboardSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard']['search']['$get']>>
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
        ? getGetRestApi3DashboardSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].dashboard.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3DashboardSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard']['search']['$get']>>
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
        ? getGetRestApi3DashboardSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].dashboard.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3DashboardDashboardIdGadgetKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget']['$get']
  >,
) {
  return ['rest', '/rest/api/3/dashboard/:dashboardId/gadget', args] as const
}

export function useGetRestApi3DashboardDashboardIdGadget<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget']['$get']
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
        ? getGetRestApi3DashboardDashboardIdGadgetKey(args)
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
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget']['$get']
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
          client.rest.api['3'].dashboard[':dashboardId'].gadget.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3DashboardDashboardIdGadget<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget']['$get']
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
        ? getGetRestApi3DashboardDashboardIdGadgetKey(args)
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
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget']['$get']
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
          client.rest.api['3'].dashboard[':dashboardId'].gadget.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3DashboardDashboardIdGadgetKey() {
  return ['rest', '/rest/api/3/dashboard/:dashboardId/gadget', 'POST'] as const
}

export function usePostRestApi3DashboardDashboardIdGadget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3DashboardDashboardIdGadgetKey()
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
            (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].dashboard[':dashboardId'].gadget.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3DashboardDashboardIdGadgetGadgetIdKey() {
  return ['rest', '/rest/api/3/dashboard/:dashboardId/gadget/:gadgetId', 'PUT'] as const
}

export function usePutRestApi3DashboardDashboardIdGadgetGadgetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget'][':gadgetId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget'][':gadgetId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3DashboardDashboardIdGadgetGadgetIdKey()
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
            (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget'][':gadgetId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].dashboard[':dashboardId'].gadget[':gadgetId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3DashboardDashboardIdGadgetGadgetIdKey() {
  return ['rest', '/rest/api/3/dashboard/:dashboardId/gadget/:gadgetId', 'DELETE'] as const
}

export function useDeleteRestApi3DashboardDashboardIdGadgetGadgetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget'][':gadgetId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget'][':gadgetId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3DashboardDashboardIdGadgetGadgetIdKey()
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
            (typeof client.rest.api)['3']['dashboard'][':dashboardId']['gadget'][':gadgetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].dashboard[':dashboardId'].gadget[':gadgetId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3DashboardDashboardIdItemsItemIdPropertiesKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties']['$get']
  >,
) {
  return ['rest', '/rest/api/3/dashboard/:dashboardId/items/:itemId/properties', args] as const
}

export function useGetRestApi3DashboardDashboardIdItemsItemIdProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties']['$get']
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
        ? getGetRestApi3DashboardDashboardIdItemsItemIdPropertiesKey(args)
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
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties']['$get']
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
          client.rest.api['3'].dashboard[':dashboardId'].items[':itemId'].properties.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3DashboardDashboardIdItemsItemIdProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties']['$get']
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
        ? getGetRestApi3DashboardDashboardIdItemsItemIdPropertiesKey(args)
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
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties']['$get']
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
          client.rest.api['3'].dashboard[':dashboardId'].items[':itemId'].properties.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$get']
  >,
) {
  return [
    'rest',
    '/rest/api/3/dashboard/:dashboardId/items/:itemId/properties/:propertyKey',
    args,
  ] as const
}

export function useGetRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$get']
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
        ? getGetRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyKey(args)
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
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$get']
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
          client.rest.api['3'].dashboard[':dashboardId'].items[':itemId'].properties[
            ':propertyKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$get']
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
        ? getGetRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyKey(args)
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
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$get']
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
          client.rest.api['3'].dashboard[':dashboardId'].items[':itemId'].properties[
            ':propertyKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyKey() {
  return [
    'rest',
    '/rest/api/3/dashboard/:dashboardId/items/:itemId/properties/:propertyKey',
    'PUT',
  ] as const
}

export function usePutRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].dashboard[':dashboardId'].items[':itemId'].properties[
            ':propertyKey'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyKey() {
  return [
    'rest',
    '/rest/api/3/dashboard/:dashboardId/items/:itemId/properties/:propertyKey',
    'DELETE',
  ] as const
}

export function useDeleteRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['dashboard'][':dashboardId']['items'][':itemId']['properties'][':propertyKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].dashboard[':dashboardId'].items[':itemId'].properties[
            ':propertyKey'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3DashboardIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/dashboard/:id', args] as const
}

export function useGetRestApi3DashboardId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard'][':id']['$get']>>
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
        ? getGetRestApi3DashboardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].dashboard[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3DashboardId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['dashboard'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard'][':id']['$get']>>
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
        ? getGetRestApi3DashboardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].dashboard[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3DashboardIdKey() {
  return ['rest', '/rest/api/3/dashboard/:id', 'PUT'] as const
}

export function usePutRestApi3DashboardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['dashboard'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3DashboardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['dashboard'][':id']['$put']> },
      ) => parseResponse(client.rest.api['3'].dashboard[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3DashboardIdKey() {
  return ['rest', '/rest/api/3/dashboard/:id', 'DELETE'] as const
}

export function useDeleteRestApi3DashboardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['dashboard'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3DashboardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['dashboard'][':id']['$delete']> },
      ) => parseResponse(client.rest.api['3'].dashboard[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3DashboardIdCopyKey() {
  return ['rest', '/rest/api/3/dashboard/:id/copy', 'POST'] as const
}

export function usePostRestApi3DashboardIdCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['dashboard'][':id']['copy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['dashboard'][':id']['copy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3DashboardIdCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['dashboard'][':id']['copy']['$post']>
        },
      ) => parseResponse(client.rest.api['3'].dashboard[':id'].copy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3EventsKey() {
  return ['rest', '/rest/api/3/events'] as const
}

export function useGetRestApi3Events<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['events']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestApi3EventsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['events']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].events.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Events<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['events']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestApi3EventsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['events']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].events.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3ExpressionAnalyseKey() {
  return ['rest', '/rest/api/3/expression/analyse', 'POST'] as const
}

export function usePostRestApi3ExpressionAnalyse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['expression']['analyse']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['expression']['analyse']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ExpressionAnalyseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['expression']['analyse']['$post']>
        },
      ) => parseResponse(client.rest.api['3'].expression.analyse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3ExpressionEvalKey() {
  return ['rest', '/rest/api/3/expression/eval', 'POST'] as const
}

export function usePostRestApi3ExpressionEval<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['expression']['eval']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['expression']['eval']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ExpressionEvalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['expression']['eval']['$post']> },
      ) => parseResponse(client.rest.api['3'].expression.eval.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FieldKey() {
  return ['rest', '/rest/api/3/field'] as const
}

export function useGetRestApi3Field<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['field']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestApi3FieldKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['field']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].field.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Field<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['field']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestApi3FieldKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['field']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].field.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3FieldKey() {
  return ['rest', '/rest/api/3/field', 'POST'] as const
}

export function usePostRestApi3Field<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['field']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['field']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3FieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['field']['$post']> },
      ) => parseResponse(client.rest.api['3'].field.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FieldSearchKey(
  args: InferRequestType<(typeof client.rest.api)['3']['field']['search']['$get']>,
) {
  return ['rest', '/rest/api/3/field/search', args] as const
}

export function useGetRestApi3FieldSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['field']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['field']['search']['$get']>>
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
        ? getGetRestApi3FieldSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['field']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].field.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['field']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['field']['search']['$get']>>
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
        ? getGetRestApi3FieldSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['field']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].field.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3FieldSearchTrashedKey(
  args: InferRequestType<(typeof client.rest.api)['3']['field']['search']['trashed']['$get']>,
) {
  return ['rest', '/rest/api/3/field/search/trashed', args] as const
}

export function useGetRestApi3FieldSearchTrashed<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['field']['search']['trashed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['field']['search']['trashed']['$get']>>
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
        ? getGetRestApi3FieldSearchTrashedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['field']['search']['trashed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].field.search.trashed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldSearchTrashed<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['field']['search']['trashed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['field']['search']['trashed']['$get']>>
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
        ? getGetRestApi3FieldSearchTrashedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['field']['search']['trashed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].field.search.trashed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3FieldFieldIdKey() {
  return ['rest', '/rest/api/3/field/:fieldId', 'PUT'] as const
}

export function usePutRestApi3FieldFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['field'][':fieldId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FieldFieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['$put']> },
      ) => parseResponse(client.rest.api['3'].field[':fieldId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FieldFieldIdContextKey(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['context']['$get']>,
) {
  return ['rest', '/rest/api/3/field/:fieldId/context', args] as const
}

export function useGetRestApi3FieldFieldIdContext<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['context']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldId']['context']['$get']>
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
        ? getGetRestApi3FieldFieldIdContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldId']['context']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].field[':fieldId'].context.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldFieldIdContext<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['context']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldId']['context']['$get']>
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
        ? getGetRestApi3FieldFieldIdContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldId']['context']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].field[':fieldId'].context.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3FieldFieldIdContextKey() {
  return ['rest', '/rest/api/3/field/:fieldId/context', 'POST'] as const
}

export function usePostRestApi3FieldFieldIdContext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['field'][':fieldId']['context']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['context']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3FieldFieldIdContextKey()
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
            (typeof client.rest.api)['3']['field'][':fieldId']['context']['$post']
          >
        },
      ) => parseResponse(client.rest.api['3'].field[':fieldId'].context.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FieldFieldIdContextDefaultValueKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['defaultValue']['$get']
  >,
) {
  return ['rest', '/rest/api/3/field/:fieldId/context/defaultValue', args] as const
}

export function useGetRestApi3FieldFieldIdContextDefaultValue<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['defaultValue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context']['defaultValue']['$get']
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
        ? getGetRestApi3FieldFieldIdContextDefaultValueKey(args)
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
                (typeof client.rest.api)['3']['field'][':fieldId']['context']['defaultValue']['$get']
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
          client.rest.api['3'].field[':fieldId'].context.defaultValue.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldFieldIdContextDefaultValue<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['defaultValue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context']['defaultValue']['$get']
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
        ? getGetRestApi3FieldFieldIdContextDefaultValueKey(args)
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
                (typeof client.rest.api)['3']['field'][':fieldId']['context']['defaultValue']['$get']
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
          client.rest.api['3'].field[':fieldId'].context.defaultValue.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3FieldFieldIdContextDefaultValueKey() {
  return ['rest', '/rest/api/3/field/:fieldId/context/defaultValue', 'PUT'] as const
}

export function usePutRestApi3FieldFieldIdContextDefaultValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context']['defaultValue']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldId']['context']['defaultValue']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FieldFieldIdContextDefaultValueKey()
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
            (typeof client.rest.api)['3']['field'][':fieldId']['context']['defaultValue']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldId'].context.defaultValue.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FieldFieldIdContextIssuetypemappingKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['issuetypemapping']['$get']
  >,
) {
  return ['rest', '/rest/api/3/field/:fieldId/context/issuetypemapping', args] as const
}

export function useGetRestApi3FieldFieldIdContextIssuetypemapping<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['issuetypemapping']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context']['issuetypemapping']['$get']
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
        ? getGetRestApi3FieldFieldIdContextIssuetypemappingKey(args)
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
                (typeof client.rest.api)['3']['field'][':fieldId']['context']['issuetypemapping']['$get']
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
          client.rest.api['3'].field[':fieldId'].context.issuetypemapping.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldFieldIdContextIssuetypemapping<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['issuetypemapping']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context']['issuetypemapping']['$get']
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
        ? getGetRestApi3FieldFieldIdContextIssuetypemappingKey(args)
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
                (typeof client.rest.api)['3']['field'][':fieldId']['context']['issuetypemapping']['$get']
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
          client.rest.api['3'].field[':fieldId'].context.issuetypemapping.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3FieldFieldIdContextMappingKey() {
  return ['rest', '/rest/api/3/field/:fieldId/context/mapping', 'POST'] as const
}

export function usePostRestApi3FieldFieldIdContextMapping<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['field'][':fieldId']['context']['mapping']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldId']['context']['mapping']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3FieldFieldIdContextMappingKey()
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
            (typeof client.rest.api)['3']['field'][':fieldId']['context']['mapping']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldId'].context.mapping.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FieldFieldIdContextProjectmappingKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['projectmapping']['$get']
  >,
) {
  return ['rest', '/rest/api/3/field/:fieldId/context/projectmapping', args] as const
}

export function useGetRestApi3FieldFieldIdContextProjectmapping<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['projectmapping']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context']['projectmapping']['$get']
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
        ? getGetRestApi3FieldFieldIdContextProjectmappingKey(args)
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
                (typeof client.rest.api)['3']['field'][':fieldId']['context']['projectmapping']['$get']
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
          client.rest.api['3'].field[':fieldId'].context.projectmapping.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldFieldIdContextProjectmapping<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context']['projectmapping']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context']['projectmapping']['$get']
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
        ? getGetRestApi3FieldFieldIdContextProjectmappingKey(args)
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
                (typeof client.rest.api)['3']['field'][':fieldId']['context']['projectmapping']['$get']
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
          client.rest.api['3'].field[':fieldId'].context.projectmapping.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3FieldFieldIdContextContextIdKey() {
  return ['rest', '/rest/api/3/field/:fieldId/context/:contextId', 'PUT'] as const
}

export function usePutRestApi3FieldFieldIdContextContextId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FieldFieldIdContextContextIdKey()
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
            (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldId'].context[':contextId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3FieldFieldIdContextContextIdKey() {
  return ['rest', '/rest/api/3/field/:fieldId/context/:contextId', 'DELETE'] as const
}

export function useDeleteRestApi3FieldFieldIdContextContextId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3FieldFieldIdContextContextIdKey()
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
            (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldId'].context[':contextId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3FieldFieldIdContextContextIdIssuetypeKey() {
  return ['rest', '/rest/api/3/field/:fieldId/context/:contextId/issuetype', 'PUT'] as const
}

export function usePutRestApi3FieldFieldIdContextContextIdIssuetype<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['issuetype']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['issuetype']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FieldFieldIdContextContextIdIssuetypeKey()
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
            (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['issuetype']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldId'].context[':contextId'].issuetype.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3FieldFieldIdContextContextIdIssuetypeRemoveKey() {
  return ['rest', '/rest/api/3/field/:fieldId/context/:contextId/issuetype/remove', 'POST'] as const
}

export function usePostRestApi3FieldFieldIdContextContextIdIssuetypeRemove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['issuetype']['remove']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['issuetype']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3FieldFieldIdContextContextIdIssuetypeRemoveKey()
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
            (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['issuetype']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldId'].context[':contextId'].issuetype.remove.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FieldFieldIdContextContextIdOptionKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$get']
  >,
) {
  return ['rest', '/rest/api/3/field/:fieldId/context/:contextId/option', args] as const
}

export function useGetRestApi3FieldFieldIdContextContextIdOption<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$get']
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
        ? getGetRestApi3FieldFieldIdContextContextIdOptionKey(args)
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
                (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$get']
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
          client.rest.api['3'].field[':fieldId'].context[':contextId'].option.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldFieldIdContextContextIdOption<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$get']
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
        ? getGetRestApi3FieldFieldIdContextContextIdOptionKey(args)
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
                (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$get']
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
          client.rest.api['3'].field[':fieldId'].context[':contextId'].option.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3FieldFieldIdContextContextIdOptionKey() {
  return ['rest', '/rest/api/3/field/:fieldId/context/:contextId/option', 'PUT'] as const
}

export function usePutRestApi3FieldFieldIdContextContextIdOption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FieldFieldIdContextContextIdOptionKey()
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
            (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldId'].context[':contextId'].option.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3FieldFieldIdContextContextIdOptionKey() {
  return ['rest', '/rest/api/3/field/:fieldId/context/:contextId/option', 'POST'] as const
}

export function usePostRestApi3FieldFieldIdContextContextIdOption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3FieldFieldIdContextContextIdOptionKey()
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
            (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldId'].context[':contextId'].option.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3FieldFieldIdContextContextIdOptionMoveKey() {
  return ['rest', '/rest/api/3/field/:fieldId/context/:contextId/option/move', 'PUT'] as const
}

export function usePutRestApi3FieldFieldIdContextContextIdOptionMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['move']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['move']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FieldFieldIdContextContextIdOptionMoveKey()
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
            (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option']['move']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldId'].context[':contextId'].option.move.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3FieldFieldIdContextContextIdOptionOptionIdKey() {
  return [
    'rest',
    '/rest/api/3/field/:fieldId/context/:contextId/option/:optionId',
    'DELETE',
  ] as const
}

export function useDeleteRestApi3FieldFieldIdContextContextIdOptionOptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option'][':optionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option'][':optionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3FieldFieldIdContextContextIdOptionOptionIdKey()
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
            (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['option'][':optionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldId'].context[':contextId'].option[':optionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3FieldFieldIdContextContextIdProjectKey() {
  return ['rest', '/rest/api/3/field/:fieldId/context/:contextId/project', 'PUT'] as const
}

export function usePutRestApi3FieldFieldIdContextContextIdProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['project']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['project']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FieldFieldIdContextContextIdProjectKey()
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
            (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['project']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldId'].context[':contextId'].project.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3FieldFieldIdContextContextIdProjectRemoveKey() {
  return ['rest', '/rest/api/3/field/:fieldId/context/:contextId/project/remove', 'POST'] as const
}

export function usePostRestApi3FieldFieldIdContextContextIdProjectRemove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['project']['remove']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['project']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3FieldFieldIdContextContextIdProjectRemoveKey()
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
            (typeof client.rest.api)['3']['field'][':fieldId']['context'][':contextId']['project']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldId'].context[':contextId'].project.remove.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FieldFieldIdContextsKey(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['contexts']['$get']>,
) {
  return ['rest', '/rest/api/3/field/:fieldId/contexts', args] as const
}

export function useGetRestApi3FieldFieldIdContexts<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['contexts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldId']['contexts']['$get']>
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
        ? getGetRestApi3FieldFieldIdContextsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldId']['contexts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].field[':fieldId'].contexts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldFieldIdContexts<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['contexts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldId']['contexts']['$get']>
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
        ? getGetRestApi3FieldFieldIdContextsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldId']['contexts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].field[':fieldId'].contexts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3FieldFieldIdScreensKey(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['screens']['$get']>,
) {
  return ['rest', '/rest/api/3/field/:fieldId/screens', args] as const
}

export function useGetRestApi3FieldFieldIdScreens<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['screens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldId']['screens']['$get']>
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
        ? getGetRestApi3FieldFieldIdScreensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldId']['screens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].field[':fieldId'].screens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldFieldIdScreens<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldId']['screens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldId']['screens']['$get']>
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
        ? getGetRestApi3FieldFieldIdScreensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldId']['screens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].field[':fieldId'].screens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3FieldFieldKeyOptionKey(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldKey']['option']['$get']>,
) {
  return ['rest', '/rest/api/3/field/:fieldKey/option', args] as const
}

export function useGetRestApi3FieldFieldKeyOption<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldKey']['option']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldKey']['option']['$get']>
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
        ? getGetRestApi3FieldFieldKeyOptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldKey']['option']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].field[':fieldKey'].option.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldFieldKeyOption<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['field'][':fieldKey']['option']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldKey']['option']['$get']>
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
        ? getGetRestApi3FieldFieldKeyOptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['field'][':fieldKey']['option']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].field[':fieldKey'].option.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3FieldFieldKeyOptionKey() {
  return ['rest', '/rest/api/3/field/:fieldKey/option', 'POST'] as const
}

export function usePostRestApi3FieldFieldKeyOption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['field'][':fieldKey']['option']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['field'][':fieldKey']['option']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3FieldFieldKeyOptionKey()
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
            (typeof client.rest.api)['3']['field'][':fieldKey']['option']['$post']
          >
        },
      ) => parseResponse(client.rest.api['3'].field[':fieldKey'].option.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FieldFieldKeyOptionSuggestionsEditKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['edit']['$get']
  >,
) {
  return ['rest', '/rest/api/3/field/:fieldKey/option/suggestions/edit', args] as const
}

export function useGetRestApi3FieldFieldKeyOptionSuggestionsEdit<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['edit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['edit']['$get']
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
        ? getGetRestApi3FieldFieldKeyOptionSuggestionsEditKey(args)
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
                (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['edit']['$get']
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
          client.rest.api['3'].field[':fieldKey'].option.suggestions.edit.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldFieldKeyOptionSuggestionsEdit<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['edit']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['edit']['$get']
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
        ? getGetRestApi3FieldFieldKeyOptionSuggestionsEditKey(args)
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
                (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['edit']['$get']
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
          client.rest.api['3'].field[':fieldKey'].option.suggestions.edit.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3FieldFieldKeyOptionSuggestionsSearchKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['search']['$get']
  >,
) {
  return ['rest', '/rest/api/3/field/:fieldKey/option/suggestions/search', args] as const
}

export function useGetRestApi3FieldFieldKeyOptionSuggestionsSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['search']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['search']['$get']
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
        ? getGetRestApi3FieldFieldKeyOptionSuggestionsSearchKey(args)
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
                (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['search']['$get']
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
          client.rest.api['3'].field[':fieldKey'].option.suggestions.search.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldFieldKeyOptionSuggestionsSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['search']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['search']['$get']
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
        ? getGetRestApi3FieldFieldKeyOptionSuggestionsSearchKey(args)
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
                (typeof client.rest.api)['3']['field'][':fieldKey']['option']['suggestions']['search']['$get']
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
          client.rest.api['3'].field[':fieldKey'].option.suggestions.search.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3FieldFieldKeyOptionOptionIdKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$get']
  >,
) {
  return ['rest', '/rest/api/3/field/:fieldKey/option/:optionId', args] as const
}

export function useGetRestApi3FieldFieldKeyOptionOptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$get']
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
        ? getGetRestApi3FieldFieldKeyOptionOptionIdKey(args)
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
                (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$get']
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
          client.rest.api['3'].field[':fieldKey'].option[':optionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldFieldKeyOptionOptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$get']
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
        ? getGetRestApi3FieldFieldKeyOptionOptionIdKey(args)
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
                (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$get']
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
          client.rest.api['3'].field[':fieldKey'].option[':optionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3FieldFieldKeyOptionOptionIdKey() {
  return ['rest', '/rest/api/3/field/:fieldKey/option/:optionId', 'PUT'] as const
}

export function usePutRestApi3FieldFieldKeyOptionOptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FieldFieldKeyOptionOptionIdKey()
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
            (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldKey'].option[':optionId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3FieldFieldKeyOptionOptionIdKey() {
  return ['rest', '/rest/api/3/field/:fieldKey/option/:optionId', 'DELETE'] as const
}

export function useDeleteRestApi3FieldFieldKeyOptionOptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3FieldFieldKeyOptionOptionIdKey()
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
            (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldKey'].option[':optionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3FieldFieldKeyOptionOptionIdIssueKey() {
  return ['rest', '/rest/api/3/field/:fieldKey/option/:optionId/issue', 'DELETE'] as const
}

export function useDeleteRestApi3FieldFieldKeyOptionOptionIdIssue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['issue']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['issue']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3FieldFieldKeyOptionOptionIdIssueKey()
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
            (typeof client.rest.api)['3']['field'][':fieldKey']['option'][':optionId']['issue']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].field[':fieldKey'].option[':optionId'].issue.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3FieldIdKey() {
  return ['rest', '/rest/api/3/field/:id', 'DELETE'] as const
}

export function useDeleteRestApi3FieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['field'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['field'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3FieldIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['field'][':id']['$delete']> },
      ) => parseResponse(client.rest.api['3'].field[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3FieldIdRestoreKey() {
  return ['rest', '/rest/api/3/field/:id/restore', 'POST'] as const
}

export function usePostRestApi3FieldIdRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['field'][':id']['restore']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['field'][':id']['restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3FieldIdRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['field'][':id']['restore']['$post']>
        },
      ) => parseResponse(client.rest.api['3'].field[':id'].restore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3FieldIdTrashKey() {
  return ['rest', '/rest/api/3/field/:id/trash', 'POST'] as const
}

export function usePostRestApi3FieldIdTrash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['field'][':id']['trash']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['field'][':id']['trash']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3FieldIdTrashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['field'][':id']['trash']['$post']>
        },
      ) => parseResponse(client.rest.api['3'].field[':id'].trash.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FieldconfigurationKey(
  args: InferRequestType<(typeof client.rest.api)['3']['fieldconfiguration']['$get']>,
) {
  return ['rest', '/rest/api/3/fieldconfiguration', args] as const
}

export function useGetRestApi3Fieldconfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['fieldconfiguration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['fieldconfiguration']['$get']>>
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
        ? getGetRestApi3FieldconfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['fieldconfiguration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].fieldconfiguration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Fieldconfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['fieldconfiguration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['fieldconfiguration']['$get']>>
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
        ? getGetRestApi3FieldconfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['fieldconfiguration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].fieldconfiguration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3FieldconfigurationKey() {
  return ['rest', '/rest/api/3/fieldconfiguration', 'POST'] as const
}

export function usePostRestApi3Fieldconfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['fieldconfiguration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['fieldconfiguration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3FieldconfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['fieldconfiguration']['$post']> },
      ) => parseResponse(client.rest.api['3'].fieldconfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3FieldconfigurationIdKey() {
  return ['rest', '/rest/api/3/fieldconfiguration/:id', 'PUT'] as const
}

export function usePutRestApi3FieldconfigurationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['fieldconfiguration'][':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['fieldconfiguration'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FieldconfigurationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['fieldconfiguration'][':id']['$put']>
        },
      ) => parseResponse(client.rest.api['3'].fieldconfiguration[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3FieldconfigurationIdKey() {
  return ['rest', '/rest/api/3/fieldconfiguration/:id', 'DELETE'] as const
}

export function useDeleteRestApi3FieldconfigurationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['fieldconfiguration'][':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['fieldconfiguration'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3FieldconfigurationIdKey()
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
            (typeof client.rest.api)['3']['fieldconfiguration'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.rest.api['3'].fieldconfiguration[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FieldconfigurationIdFieldsKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfiguration'][':id']['fields']['$get']
  >,
) {
  return ['rest', '/rest/api/3/fieldconfiguration/:id/fields', args] as const
}

export function useGetRestApi3FieldconfigurationIdFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfiguration'][':id']['fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['fieldconfiguration'][':id']['fields']['$get']
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
        ? getGetRestApi3FieldconfigurationIdFieldsKey(args)
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
                (typeof client.rest.api)['3']['fieldconfiguration'][':id']['fields']['$get']
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
          client.rest.api['3'].fieldconfiguration[':id'].fields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldconfigurationIdFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfiguration'][':id']['fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['fieldconfiguration'][':id']['fields']['$get']
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
        ? getGetRestApi3FieldconfigurationIdFieldsKey(args)
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
                (typeof client.rest.api)['3']['fieldconfiguration'][':id']['fields']['$get']
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
          client.rest.api['3'].fieldconfiguration[':id'].fields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3FieldconfigurationIdFieldsKey() {
  return ['rest', '/rest/api/3/fieldconfiguration/:id/fields', 'PUT'] as const
}

export function usePutRestApi3FieldconfigurationIdFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['fieldconfiguration'][':id']['fields']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['fieldconfiguration'][':id']['fields']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FieldconfigurationIdFieldsKey()
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
            (typeof client.rest.api)['3']['fieldconfiguration'][':id']['fields']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].fieldconfiguration[':id'].fields.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FieldconfigurationschemeKey(
  args: InferRequestType<(typeof client.rest.api)['3']['fieldconfigurationscheme']['$get']>,
) {
  return ['rest', '/rest/api/3/fieldconfigurationscheme', args] as const
}

export function useGetRestApi3Fieldconfigurationscheme<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['fieldconfigurationscheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['fieldconfigurationscheme']['$get']>>
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
        ? getGetRestApi3FieldconfigurationschemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['fieldconfigurationscheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].fieldconfigurationscheme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Fieldconfigurationscheme<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['fieldconfigurationscheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['fieldconfigurationscheme']['$get']>>
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
        ? getGetRestApi3FieldconfigurationschemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['fieldconfigurationscheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].fieldconfigurationscheme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3FieldconfigurationschemeKey() {
  return ['rest', '/rest/api/3/fieldconfigurationscheme', 'POST'] as const
}

export function usePostRestApi3Fieldconfigurationscheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['fieldconfigurationscheme']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['fieldconfigurationscheme']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3FieldconfigurationschemeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['fieldconfigurationscheme']['$post']>
        },
      ) => parseResponse(client.rest.api['3'].fieldconfigurationscheme.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FieldconfigurationschemeMappingKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfigurationscheme']['mapping']['$get']
  >,
) {
  return ['rest', '/rest/api/3/fieldconfigurationscheme/mapping', args] as const
}

export function useGetRestApi3FieldconfigurationschemeMapping<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfigurationscheme']['mapping']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['fieldconfigurationscheme']['mapping']['$get']
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
        ? getGetRestApi3FieldconfigurationschemeMappingKey(args)
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
                (typeof client.rest.api)['3']['fieldconfigurationscheme']['mapping']['$get']
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
          client.rest.api['3'].fieldconfigurationscheme.mapping.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldconfigurationschemeMapping<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfigurationscheme']['mapping']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['fieldconfigurationscheme']['mapping']['$get']
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
        ? getGetRestApi3FieldconfigurationschemeMappingKey(args)
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
                (typeof client.rest.api)['3']['fieldconfigurationscheme']['mapping']['$get']
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
          client.rest.api['3'].fieldconfigurationscheme.mapping.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3FieldconfigurationschemeProjectKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfigurationscheme']['project']['$get']
  >,
) {
  return ['rest', '/rest/api/3/fieldconfigurationscheme/project', args] as const
}

export function useGetRestApi3FieldconfigurationschemeProject<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfigurationscheme']['project']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['fieldconfigurationscheme']['project']['$get']
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
        ? getGetRestApi3FieldconfigurationschemeProjectKey(args)
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
                (typeof client.rest.api)['3']['fieldconfigurationscheme']['project']['$get']
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
          client.rest.api['3'].fieldconfigurationscheme.project.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FieldconfigurationschemeProject<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['fieldconfigurationscheme']['project']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['fieldconfigurationscheme']['project']['$get']
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
        ? getGetRestApi3FieldconfigurationschemeProjectKey(args)
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
                (typeof client.rest.api)['3']['fieldconfigurationscheme']['project']['$get']
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
          client.rest.api['3'].fieldconfigurationscheme.project.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3FieldconfigurationschemeProjectKey() {
  return ['rest', '/rest/api/3/fieldconfigurationscheme/project', 'PUT'] as const
}

export function usePutRestApi3FieldconfigurationschemeProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['fieldconfigurationscheme']['project']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['fieldconfigurationscheme']['project']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FieldconfigurationschemeProjectKey()
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
            (typeof client.rest.api)['3']['fieldconfigurationscheme']['project']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].fieldconfigurationscheme.project.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3FieldconfigurationschemeIdKey() {
  return ['rest', '/rest/api/3/fieldconfigurationscheme/:id', 'PUT'] as const
}

export function usePutRestApi3FieldconfigurationschemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FieldconfigurationschemeIdKey()
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
            (typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].fieldconfigurationscheme[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3FieldconfigurationschemeIdKey() {
  return ['rest', '/rest/api/3/fieldconfigurationscheme/:id', 'DELETE'] as const
}

export function useDeleteRestApi3FieldconfigurationschemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3FieldconfigurationschemeIdKey()
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
            (typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].fieldconfigurationscheme[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3FieldconfigurationschemeIdMappingKey() {
  return ['rest', '/rest/api/3/fieldconfigurationscheme/:id/mapping', 'PUT'] as const
}

export function usePutRestApi3FieldconfigurationschemeIdMapping<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['mapping']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['mapping']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FieldconfigurationschemeIdMappingKey()
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
            (typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['mapping']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].fieldconfigurationscheme[':id'].mapping.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3FieldconfigurationschemeIdMappingDeleteKey() {
  return ['rest', '/rest/api/3/fieldconfigurationscheme/:id/mapping/delete', 'POST'] as const
}

export function usePostRestApi3FieldconfigurationschemeIdMappingDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['mapping']['delete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['mapping']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3FieldconfigurationschemeIdMappingDeleteKey()
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
            (typeof client.rest.api)['3']['fieldconfigurationscheme'][':id']['mapping']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].fieldconfigurationscheme[':id'].mapping.delete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FilterKey(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['$get']>,
) {
  return ['rest', '/rest/api/3/filter', args] as const
}

export function useGetRestApi3Filter<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3FilterKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].filter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Filter<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3FilterKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].filter.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3FilterKey() {
  return ['rest', '/rest/api/3/filter', 'POST'] as const
}

export function usePostRestApi3Filter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['filter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3FilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['filter']['$post']> },
      ) => parseResponse(client.rest.api['3'].filter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FilterDefaultShareScopeKey() {
  return ['rest', '/rest/api/3/filter/defaultShareScope'] as const
}

export function useGetRestApi3FilterDefaultShareScope<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['defaultShareScope']['$get']>>
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
        ? getGetRestApi3FilterDefaultShareScopeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['filter']['defaultShareScope']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].filter.defaultShareScope.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FilterDefaultShareScope<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['defaultShareScope']['$get']>>
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
        ? getGetRestApi3FilterDefaultShareScopeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['filter']['defaultShareScope']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].filter.defaultShareScope.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3FilterDefaultShareScopeKey() {
  return ['rest', '/rest/api/3/filter/defaultShareScope', 'PUT'] as const
}

export function usePutRestApi3FilterDefaultShareScope<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['defaultShareScope']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['filter']['defaultShareScope']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FilterDefaultShareScopeKey()
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
            (typeof client.rest.api)['3']['filter']['defaultShareScope']['$put']
          >
        },
      ) => parseResponse(client.rest.api['3'].filter.defaultShareScope.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FilterFavouriteKey(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['favourite']['$get']>,
) {
  return ['rest', '/rest/api/3/filter/favourite', args] as const
}

export function useGetRestApi3FilterFavourite<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['favourite']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['favourite']['$get']>>
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
        ? getGetRestApi3FilterFavouriteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['favourite']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].filter.favourite.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FilterFavourite<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['favourite']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['favourite']['$get']>>
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
        ? getGetRestApi3FilterFavouriteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['favourite']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].filter.favourite.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3FilterMyKey(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['my']['$get']>,
) {
  return ['rest', '/rest/api/3/filter/my', args] as const
}

export function useGetRestApi3FilterMy<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['my']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['my']['$get']>>
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
        ? getGetRestApi3FilterMyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['my']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].filter.my.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FilterMy<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['my']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['my']['$get']>>
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
        ? getGetRestApi3FilterMyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['my']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].filter.my.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3FilterSearchKey(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['search']['$get']>,
) {
  return ['rest', '/rest/api/3/filter/search', args] as const
}

export function useGetRestApi3FilterSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['search']['$get']>>
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
        ? getGetRestApi3FilterSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].filter.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FilterSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['filter']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['search']['$get']>>
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
        ? getGetRestApi3FilterSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].filter.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3FilterIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/filter/:id', args] as const
}

export function useGetRestApi3FilterId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter'][':id']['$get']>>
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
        ? getGetRestApi3FilterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].filter[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FilterId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter'][':id']['$get']>>
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
        ? getGetRestApi3FilterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].filter[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3FilterIdKey() {
  return ['rest', '/rest/api/3/filter/:id', 'PUT'] as const
}

export function usePutRestApi3FilterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['filter'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FilterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['$put']> },
      ) => parseResponse(client.rest.api['3'].filter[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3FilterIdKey() {
  return ['rest', '/rest/api/3/filter/:id', 'DELETE'] as const
}

export function useDeleteRestApi3FilterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3FilterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['$delete']> },
      ) => parseResponse(client.rest.api['3'].filter[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FilterIdColumnsKey(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$get']>,
) {
  return ['rest', '/rest/api/3/filter/:id/columns', args] as const
}

export function useGetRestApi3FilterIdColumns<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$get']>>
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
        ? getGetRestApi3FilterIdColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].filter[':id'].columns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FilterIdColumns<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$get']>>
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
        ? getGetRestApi3FilterIdColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].filter[':id'].columns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3FilterIdColumnsKey() {
  return ['rest', '/rest/api/3/filter/:id/columns', 'PUT'] as const
}

export function usePutRestApi3FilterIdColumns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FilterIdColumnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$put']>
        },
      ) => parseResponse(client.rest.api['3'].filter[':id'].columns.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3FilterIdColumnsKey() {
  return ['rest', '/rest/api/3/filter/:id/columns', 'DELETE'] as const
}

export function useDeleteRestApi3FilterIdColumns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['columns']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3FilterIdColumnsKey()
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
            (typeof client.rest.api)['3']['filter'][':id']['columns']['$delete']
          >
        },
      ) => parseResponse(client.rest.api['3'].filter[':id'].columns.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3FilterIdFavouriteKey() {
  return ['rest', '/rest/api/3/filter/:id/favourite', 'PUT'] as const
}

export function usePutRestApi3FilterIdFavourite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['filter'][':id']['favourite']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['favourite']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FilterIdFavouriteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['favourite']['$put']>
        },
      ) => parseResponse(client.rest.api['3'].filter[':id'].favourite.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3FilterIdFavouriteKey() {
  return ['rest', '/rest/api/3/filter/:id/favourite', 'DELETE'] as const
}

export function useDeleteRestApi3FilterIdFavourite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['filter'][':id']['favourite']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['favourite']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3FilterIdFavouriteKey()
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
            (typeof client.rest.api)['3']['filter'][':id']['favourite']['$delete']
          >
        },
      ) => parseResponse(client.rest.api['3'].filter[':id'].favourite.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3FilterIdOwnerKey() {
  return ['rest', '/rest/api/3/filter/:id/owner', 'PUT'] as const
}

export function usePutRestApi3FilterIdOwner<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['filter'][':id']['owner']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['owner']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3FilterIdOwnerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['owner']['$put']>
        },
      ) => parseResponse(client.rest.api['3'].filter[':id'].owner.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FilterIdPermissionKey(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['permission']['$get']>,
) {
  return ['rest', '/rest/api/3/filter/:id/permission', args] as const
}

export function useGetRestApi3FilterIdPermission<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['permission']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['filter'][':id']['permission']['$get']>
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
        ? getGetRestApi3FilterIdPermissionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['filter'][':id']['permission']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].filter[':id'].permission.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FilterIdPermission<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['permission']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['filter'][':id']['permission']['$get']>
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
        ? getGetRestApi3FilterIdPermissionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['filter'][':id']['permission']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].filter[':id'].permission.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3FilterIdPermissionKey() {
  return ['rest', '/rest/api/3/filter/:id/permission', 'POST'] as const
}

export function usePostRestApi3FilterIdPermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['filter'][':id']['permission']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['filter'][':id']['permission']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3FilterIdPermissionKey()
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
            (typeof client.rest.api)['3']['filter'][':id']['permission']['$post']
          >
        },
      ) => parseResponse(client.rest.api['3'].filter[':id'].permission.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3FilterIdPermissionPermissionIdKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['filter'][':id']['permission'][':permissionId']['$get']
  >,
) {
  return ['rest', '/rest/api/3/filter/:id/permission/:permissionId', args] as const
}

export function useGetRestApi3FilterIdPermissionPermissionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['filter'][':id']['permission'][':permissionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['filter'][':id']['permission'][':permissionId']['$get']
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
        ? getGetRestApi3FilterIdPermissionPermissionIdKey(args)
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
                (typeof client.rest.api)['3']['filter'][':id']['permission'][':permissionId']['$get']
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
          client.rest.api['3'].filter[':id'].permission[':permissionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3FilterIdPermissionPermissionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['filter'][':id']['permission'][':permissionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['filter'][':id']['permission'][':permissionId']['$get']
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
        ? getGetRestApi3FilterIdPermissionPermissionIdKey(args)
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
                (typeof client.rest.api)['3']['filter'][':id']['permission'][':permissionId']['$get']
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
          client.rest.api['3'].filter[':id'].permission[':permissionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRestApi3FilterIdPermissionPermissionIdKey() {
  return ['rest', '/rest/api/3/filter/:id/permission/:permissionId', 'DELETE'] as const
}

export function useDeleteRestApi3FilterIdPermissionPermissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['filter'][':id']['permission'][':permissionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['filter'][':id']['permission'][':permissionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3FilterIdPermissionPermissionIdKey()
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
            (typeof client.rest.api)['3']['filter'][':id']['permission'][':permissionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].filter[':id'].permission[':permissionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3GroupKey(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['$get']>,
) {
  return ['rest', '/rest/api/3/group', args] as const
}

export function useGetRestApi3Group<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['group']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3GroupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['group']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Group<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['group']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3GroupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['group']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3GroupKey() {
  return ['rest', '/rest/api/3/group', 'POST'] as const
}

export function usePostRestApi3Group<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['group']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3GroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['group']['$post']> },
      ) => parseResponse(client.rest.api['3'].group.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3GroupKey() {
  return ['rest', '/rest/api/3/group', 'DELETE'] as const
}

export function useDeleteRestApi3Group<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['group']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['group']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3GroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['group']['$delete']> },
      ) => parseResponse(client.rest.api['3'].group.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3GroupBulkKey(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['bulk']['$get']>,
) {
  return ['rest', '/rest/api/3/group/bulk', args] as const
}

export function useGetRestApi3GroupBulk<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['bulk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['group']['bulk']['$get']>>
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
        ? getGetRestApi3GroupBulkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['group']['bulk']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].group.bulk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3GroupBulk<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['bulk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['group']['bulk']['$get']>>
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
        ? getGetRestApi3GroupBulkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['group']['bulk']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].group.bulk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3GroupMemberKey(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['member']['$get']>,
) {
  return ['rest', '/rest/api/3/group/member', args] as const
}

export function useGetRestApi3GroupMember<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['group']['member']['$get']>>
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
        ? getGetRestApi3GroupMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['group']['member']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].group.member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3GroupMember<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['group']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['group']['member']['$get']>>
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
        ? getGetRestApi3GroupMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['group']['member']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].group.member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3GroupUserKey() {
  return ['rest', '/rest/api/3/group/user', 'POST'] as const
}

export function usePostRestApi3GroupUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['group']['user']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['group']['user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3GroupUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['group']['user']['$post']> },
      ) => parseResponse(client.rest.api['3'].group.user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3GroupUserKey() {
  return ['rest', '/rest/api/3/group/user', 'DELETE'] as const
}

export function useDeleteRestApi3GroupUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['group']['user']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['group']['user']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3GroupUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['group']['user']['$delete']> },
      ) => parseResponse(client.rest.api['3'].group.user.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3GroupsPickerKey(
  args: InferRequestType<(typeof client.rest.api)['3']['groups']['picker']['$get']>,
) {
  return ['rest', '/rest/api/3/groups/picker', args] as const
}

export function useGetRestApi3GroupsPicker<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['groups']['picker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['groups']['picker']['$get']>>
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
        ? getGetRestApi3GroupsPickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['groups']['picker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].groups.picker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3GroupsPicker<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['groups']['picker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['groups']['picker']['$get']>>
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
        ? getGetRestApi3GroupsPickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['groups']['picker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].groups.picker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3GroupuserpickerKey(
  args: InferRequestType<(typeof client.rest.api)['3']['groupuserpicker']['$get']>,
) {
  return ['rest', '/rest/api/3/groupuserpicker', args] as const
}

export function useGetRestApi3Groupuserpicker<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['groupuserpicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['groupuserpicker']['$get']>>
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
        ? getGetRestApi3GroupuserpickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['groupuserpicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].groupuserpicker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Groupuserpicker<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['groupuserpicker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['groupuserpicker']['$get']>>
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
        ? getGetRestApi3GroupuserpickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['groupuserpicker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].groupuserpicker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3InstanceLicenseKey() {
  return ['rest', '/rest/api/3/instance/license'] as const
}

export function useGetRestApi3InstanceLicense<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['instance']['license']['$get']>>
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
        ? getGetRestApi3InstanceLicenseKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['instance']['license']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].instance.license.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3InstanceLicense<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['instance']['license']['$get']>>
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
        ? getGetRestApi3InstanceLicenseKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['instance']['license']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].instance.license.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssueKey() {
  return ['rest', '/rest/api/3/issue', 'POST'] as const
}

export function usePostRestApi3Issue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['issue']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['issue']['$post']> },
      ) => parseResponse(client.rest.api['3'].issue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3IssueBulkKey() {
  return ['rest', '/rest/api/3/issue/bulk', 'POST'] as const
}

export function usePostRestApi3IssueBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issue']['bulk']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue']['bulk']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssueBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['issue']['bulk']['$post']> },
      ) => parseResponse(client.rest.api['3'].issue.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueCreatemetaKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['createmeta']['$get']>,
) {
  return ['rest', '/rest/api/3/issue/createmeta', args] as const
}

export function useGetRestApi3IssueCreatemeta<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['createmeta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issue']['createmeta']['$get']>>
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
        ? getGetRestApi3IssueCreatemetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issue']['createmeta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].issue.createmeta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueCreatemeta<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['createmeta']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issue']['createmeta']['$get']>>
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
        ? getGetRestApi3IssueCreatemetaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issue']['createmeta']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].issue.createmeta.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3IssuePickerKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['picker']['$get']>,
) {
  return ['rest', '/rest/api/3/issue/picker', args] as const
}

export function useGetRestApi3IssuePicker<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['picker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issue']['picker']['$get']>>
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
        ? getGetRestApi3IssuePickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issue']['picker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].issue.picker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssuePicker<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issue']['picker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issue']['picker']['$get']>>
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
        ? getGetRestApi3IssuePickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issue']['picker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].issue.picker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssuePropertiesKey() {
  return ['rest', '/rest/api/3/issue/properties', 'POST'] as const
}

export function usePostRestApi3IssueProperties<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issue']['properties']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue']['properties']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssuePropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['issue']['properties']['$post']> },
      ) => parseResponse(client.rest.api['3'].issue.properties.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3IssuePropertiesMultiKey() {
  return ['rest', '/rest/api/3/issue/properties/multi', 'POST'] as const
}

export function usePostRestApi3IssuePropertiesMulti<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['issue']['properties']['multi']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue']['properties']['multi']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssuePropertiesMultiKey()
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
            (typeof client.rest.api)['3']['issue']['properties']['multi']['$post']
          >
        },
      ) => parseResponse(client.rest.api['3'].issue.properties.multi.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3IssuePropertiesPropertyKeyKey() {
  return ['rest', '/rest/api/3/issue/properties/:propertyKey', 'PUT'] as const
}

export function usePutRestApi3IssuePropertiesPropertyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['issue']['properties'][':propertyKey']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue']['properties'][':propertyKey']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssuePropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['issue']['properties'][':propertyKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue.properties[':propertyKey'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssuePropertiesPropertyKeyKey() {
  return ['rest', '/rest/api/3/issue/properties/:propertyKey', 'DELETE'] as const
}

export function useDeleteRestApi3IssuePropertiesPropertyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['issue']['properties'][':propertyKey']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue']['properties'][':propertyKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssuePropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['issue']['properties'][':propertyKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue.properties[':propertyKey'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3IssueWatchingKey() {
  return ['rest', '/rest/api/3/issue/watching', 'POST'] as const
}

export function usePostRestApi3IssueWatching<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issue']['watching']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue']['watching']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssueWatchingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['issue']['watching']['$post']> },
      ) => parseResponse(client.rest.api['3'].issue.watching.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$get']>,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey', args] as const
}

export function useGetRestApi3IssueIssueIdOrKey<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$get']>>
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
        ? getGetRestApi3IssueIssueIdOrKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issue[':issueIdOrKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKey<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$get']>>
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
        ? getGetRestApi3IssueIssueIdOrKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issue[':issueIdOrKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3IssueIssueIdOrKeyKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey', 'PUT'] as const
}

export function usePutRestApi3IssueIssueIdOrKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssueIssueIdOrKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$put']>
        },
      ) => parseResponse(client.rest.api['3'].issue[':issueIdOrKey'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssueIssueIdOrKeyKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey', 'DELETE'] as const
}

export function useDeleteRestApi3IssueIssueIdOrKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssueIssueIdOrKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['$delete']>
        },
      ) => parseResponse(client.rest.api['3'].issue[':issueIdOrKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3IssueIssueIdOrKeyAssigneeKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/assignee', 'PUT'] as const
}

export function usePutRestApi3IssueIssueIdOrKeyAssignee<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['assignee']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['assignee']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssueIssueIdOrKeyAssigneeKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['assignee']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].assignee.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3IssueIssueIdOrKeyAttachmentsKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/attachments', 'POST'] as const
}

export function usePostRestApi3IssueIssueIdOrKeyAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['attachments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['attachments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssueIssueIdOrKeyAttachmentsKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['attachments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].attachments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyChangelogKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['changelog']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/changelog', args] as const
}

export function useGetRestApi3IssueIssueIdOrKeyChangelog<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['changelog']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['changelog']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyChangelogKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['changelog']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].changelog.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyChangelog<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['changelog']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['changelog']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyChangelogKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['changelog']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].changelog.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssueIssueIdOrKeyChangelogListKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/changelog/list', 'POST'] as const
}

export function usePostRestApi3IssueIssueIdOrKeyChangelogList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['changelog']['list']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['changelog']['list']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssueIssueIdOrKeyChangelogListKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['changelog']['list']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].changelog.list.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyCommentKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/comment', args] as const
}

export function useGetRestApi3IssueIssueIdOrKeyComment<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment']['$get']>
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
        ? getGetRestApi3IssueIssueIdOrKeyCommentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].comment.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyComment<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment']['$get']>
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
        ? getGetRestApi3IssueIssueIdOrKeyCommentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].comment.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssueIssueIdOrKeyCommentKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/comment', 'POST'] as const
}

export function usePostRestApi3IssueIssueIdOrKeyComment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssueIssueIdOrKeyCommentKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].comment.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyCommentIdKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/comment/:id', args] as const
}

export function useGetRestApi3IssueIssueIdOrKeyCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyCommentIdKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].comment[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyCommentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyCommentIdKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].comment[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3IssueIssueIdOrKeyCommentIdKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/comment/:id', 'PUT'] as const
}

export function usePutRestApi3IssueIssueIdOrKeyCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssueIssueIdOrKeyCommentIdKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].comment[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssueIssueIdOrKeyCommentIdKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/comment/:id', 'DELETE'] as const
}

export function useDeleteRestApi3IssueIssueIdOrKeyCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssueIssueIdOrKeyCommentIdKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['comment'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].comment[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyEditmetaKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['editmeta']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/editmeta', args] as const
}

export function useGetRestApi3IssueIssueIdOrKeyEditmeta<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['editmeta']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['editmeta']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyEditmetaKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['editmeta']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].editmeta.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyEditmeta<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['editmeta']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['editmeta']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyEditmetaKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['editmeta']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].editmeta.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssueIssueIdOrKeyNotifyKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/notify', 'POST'] as const
}

export function usePostRestApi3IssueIssueIdOrKeyNotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['notify']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['notify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssueIssueIdOrKeyNotifyKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['notify']['$post']
          >
        },
      ) =>
        parseResponse(client.rest.api['3'].issue[':issueIdOrKey'].notify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyPropertiesKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/properties', args] as const
}

export function useGetRestApi3IssueIssueIdOrKeyProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyPropertiesKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].properties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyPropertiesKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].properties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/properties/:propertyKey', args] as const
}

export function useGetRestApi3IssueIssueIdOrKeyPropertiesPropertyKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].properties[':propertyKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyPropertiesPropertyKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].properties[':propertyKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/properties/:propertyKey', 'PUT'] as const
}

export function usePutRestApi3IssueIssueIdOrKeyPropertiesPropertyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].properties[':propertyKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/properties/:propertyKey', 'DELETE'] as const
}

export function useDeleteRestApi3IssueIssueIdOrKeyPropertiesPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['properties'][':propertyKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].properties[':propertyKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyRemotelinkKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/remotelink', args] as const
}

export function useGetRestApi3IssueIssueIdOrKeyRemotelink<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyRemotelinkKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].remotelink.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyRemotelink<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyRemotelinkKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].remotelink.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssueIssueIdOrKeyRemotelinkKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/remotelink', 'POST'] as const
}

export function usePostRestApi3IssueIssueIdOrKeyRemotelink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssueIssueIdOrKeyRemotelinkKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].remotelink.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssueIssueIdOrKeyRemotelinkKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/remotelink', 'DELETE'] as const
}

export function useDeleteRestApi3IssueIssueIdOrKeyRemotelink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssueIssueIdOrKeyRemotelinkKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].remotelink.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyRemotelinkLinkIdKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/remotelink/:linkId', args] as const
}

export function useGetRestApi3IssueIssueIdOrKeyRemotelinkLinkId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyRemotelinkLinkIdKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].remotelink[':linkId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyRemotelinkLinkId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyRemotelinkLinkIdKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].remotelink[':linkId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3IssueIssueIdOrKeyRemotelinkLinkIdKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/remotelink/:linkId', 'PUT'] as const
}

export function usePutRestApi3IssueIssueIdOrKeyRemotelinkLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssueIssueIdOrKeyRemotelinkLinkIdKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].remotelink[':linkId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssueIssueIdOrKeyRemotelinkLinkIdKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/remotelink/:linkId', 'DELETE'] as const
}

export function useDeleteRestApi3IssueIssueIdOrKeyRemotelinkLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssueIssueIdOrKeyRemotelinkLinkIdKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['remotelink'][':linkId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].remotelink[':linkId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyTransitionsKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['transitions']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/transitions', args] as const
}

export function useGetRestApi3IssueIssueIdOrKeyTransitions<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['transitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['transitions']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyTransitionsKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['transitions']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].transitions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyTransitions<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['transitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['transitions']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyTransitionsKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['transitions']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].transitions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssueIssueIdOrKeyTransitionsKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/transitions', 'POST'] as const
}

export function usePostRestApi3IssueIssueIdOrKeyTransitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['transitions']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['transitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssueIssueIdOrKeyTransitionsKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['transitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].transitions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyVotesKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$get']>,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/votes', args] as const
}

export function useGetRestApi3IssueIssueIdOrKeyVotes<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$get']>
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
        ? getGetRestApi3IssueIssueIdOrKeyVotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issue[':issueIdOrKey'].votes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyVotes<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$get']>
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
        ? getGetRestApi3IssueIssueIdOrKeyVotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issue[':issueIdOrKey'].votes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssueIssueIdOrKeyVotesKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/votes', 'POST'] as const
}

export function usePostRestApi3IssueIssueIdOrKeyVotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssueIssueIdOrKeyVotesKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$post']
          >
        },
      ) =>
        parseResponse(client.rest.api['3'].issue[':issueIdOrKey'].votes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssueIssueIdOrKeyVotesKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/votes', 'DELETE'] as const
}

export function useDeleteRestApi3IssueIssueIdOrKeyVotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssueIssueIdOrKeyVotesKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['votes']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].votes.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyWatchersKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/watchers', args] as const
}

export function useGetRestApi3IssueIssueIdOrKeyWatchers<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyWatchersKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].watchers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyWatchers<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyWatchersKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].watchers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssueIssueIdOrKeyWatchersKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/watchers', 'POST'] as const
}

export function usePostRestApi3IssueIssueIdOrKeyWatchers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssueIssueIdOrKeyWatchersKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].watchers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssueIssueIdOrKeyWatchersKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/watchers', 'DELETE'] as const
}

export function useDeleteRestApi3IssueIssueIdOrKeyWatchers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssueIssueIdOrKeyWatchersKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['watchers']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].watchers.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyWorklogKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/worklog', args] as const
}

export function useGetRestApi3IssueIssueIdOrKeyWorklog<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog']['$get']>
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
        ? getGetRestApi3IssueIssueIdOrKeyWorklogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].worklog.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyWorklog<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog']['$get']>
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
        ? getGetRestApi3IssueIssueIdOrKeyWorklogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].worklog.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssueIssueIdOrKeyWorklogKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/worklog', 'POST'] as const
}

export function usePostRestApi3IssueIssueIdOrKeyWorklog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssueIssueIdOrKeyWorklogKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].worklog.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyWorklogIdKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/worklog/:id', args] as const
}

export function useGetRestApi3IssueIssueIdOrKeyWorklogId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyWorklogIdKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].worklog[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyWorklogId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyWorklogIdKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].worklog[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3IssueIssueIdOrKeyWorklogIdKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/worklog/:id', 'PUT'] as const
}

export function usePutRestApi3IssueIssueIdOrKeyWorklogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssueIssueIdOrKeyWorklogIdKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].worklog[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssueIssueIdOrKeyWorklogIdKey() {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/worklog/:id', 'DELETE'] as const
}

export function useDeleteRestApi3IssueIssueIdOrKeyWorklogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssueIssueIdOrKeyWorklogIdKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].worklog[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issue/:issueIdOrKey/worklog/:worklogId/properties', args] as const
}

export function useGetRestApi3IssueIssueIdOrKeyWorklogWorklogIdProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].worklog[':worklogId'].properties.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyWorklogWorklogIdProperties<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].worklog[':worklogId'].properties.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$get']
  >,
) {
  return [
    'rest',
    '/rest/api/3/issue/:issueIdOrKey/worklog/:worklogId/properties/:propertyKey',
    args,
  ] as const
}

export function useGetRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].worklog[':worklogId'].properties[
            ':propertyKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$get']
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
        ? getGetRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyKey(args)
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
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$get']
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
          client.rest.api['3'].issue[':issueIdOrKey'].worklog[':worklogId'].properties[
            ':propertyKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyKey() {
  return [
    'rest',
    '/rest/api/3/issue/:issueIdOrKey/worklog/:worklogId/properties/:propertyKey',
    'PUT',
  ] as const
}

export function usePutRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].worklog[':worklogId'].properties[
            ':propertyKey'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyKey() {
  return [
    'rest',
    '/rest/api/3/issue/:issueIdOrKey/worklog/:worklogId/properties/:propertyKey',
    'DELETE',
  ] as const
}

export function useDeleteRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['issue'][':issueIdOrKey']['worklog'][':worklogId']['properties'][':propertyKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issue[':issueIdOrKey'].worklog[':worklogId'].properties[
            ':propertyKey'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3IssueLinkKey() {
  return ['rest', '/rest/api/3/issueLink', 'POST'] as const
}

export function usePostRestApi3IssueLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issueLink']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issueLink']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssueLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['issueLink']['$post']> },
      ) => parseResponse(client.rest.api['3'].issueLink.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueLinkLinkIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issueLink'][':linkId']['$get']>,
) {
  return ['rest', '/rest/api/3/issueLink/:linkId', args] as const
}

export function useGetRestApi3IssueLinkLinkId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issueLink'][':linkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issueLink'][':linkId']['$get']>>
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
        ? getGetRestApi3IssueLinkLinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issueLink'][':linkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issueLink[':linkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueLinkLinkId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issueLink'][':linkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issueLink'][':linkId']['$get']>>
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
        ? getGetRestApi3IssueLinkLinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issueLink'][':linkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issueLink[':linkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRestApi3IssueLinkLinkIdKey() {
  return ['rest', '/rest/api/3/issueLink/:linkId', 'DELETE'] as const
}

export function useDeleteRestApi3IssueLinkLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issueLink'][':linkId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issueLink'][':linkId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssueLinkLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['issueLink'][':linkId']['$delete']>
        },
      ) => parseResponse(client.rest.api['3'].issueLink[':linkId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueLinkTypeKey() {
  return ['rest', '/rest/api/3/issueLinkType'] as const
}

export function useGetRestApi3IssueLinkType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issueLinkType']['$get']>>
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
        ? getGetRestApi3IssueLinkTypeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issueLinkType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].issueLinkType.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueLinkType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issueLinkType']['$get']>>
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
        ? getGetRestApi3IssueLinkTypeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issueLinkType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].issueLinkType.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssueLinkTypeKey() {
  return ['rest', '/rest/api/3/issueLinkType', 'POST'] as const
}

export function usePostRestApi3IssueLinkType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issueLinkType']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issueLinkType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssueLinkTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['issueLinkType']['$post']> },
      ) => parseResponse(client.rest.api['3'].issueLinkType.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssueLinkTypeIssueLinkTypeIdKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issueLinkType/:issueLinkTypeId', args] as const
}

export function useGetRestApi3IssueLinkTypeIssueLinkTypeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$get']>
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
        ? getGetRestApi3IssueLinkTypeIssueLinkTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.rest.api['3'].issueLinkType[':issueLinkTypeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssueLinkTypeIssueLinkTypeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$get']>
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
        ? getGetRestApi3IssueLinkTypeIssueLinkTypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.rest.api['3'].issueLinkType[':issueLinkTypeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3IssueLinkTypeIssueLinkTypeIdKey() {
  return ['rest', '/rest/api/3/issueLinkType/:issueLinkTypeId', 'PUT'] as const
}

export function usePutRestApi3IssueLinkTypeIssueLinkTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssueLinkTypeIssueLinkTypeIdKey()
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
            (typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issueLinkType[':issueLinkTypeId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssueLinkTypeIssueLinkTypeIdKey() {
  return ['rest', '/rest/api/3/issueLinkType/:issueLinkTypeId', 'DELETE'] as const
}

export function useDeleteRestApi3IssueLinkTypeIssueLinkTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssueLinkTypeIssueLinkTypeIdKey()
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
            (typeof client.rest.api)['3']['issueLinkType'][':issueLinkTypeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issueLinkType[':issueLinkTypeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssuesecurityschemesKey() {
  return ['rest', '/rest/api/3/issuesecurityschemes'] as const
}

export function useGetRestApi3Issuesecurityschemes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issuesecurityschemes']['$get']>>
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
        ? getGetRestApi3IssuesecurityschemesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuesecurityschemes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuesecurityschemes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Issuesecurityschemes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issuesecurityschemes']['$get']>>
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
        ? getGetRestApi3IssuesecurityschemesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuesecurityschemes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuesecurityschemes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3IssuesecurityschemesIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issuesecurityschemes'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/issuesecurityschemes/:id', args] as const
}

export function useGetRestApi3IssuesecurityschemesId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuesecurityschemes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuesecurityschemes'][':id']['$get']>
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
        ? getGetRestApi3IssuesecurityschemesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuesecurityschemes'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuesecurityschemes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssuesecurityschemesId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuesecurityschemes'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuesecurityschemes'][':id']['$get']>
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
        ? getGetRestApi3IssuesecurityschemesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuesecurityschemes'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuesecurityschemes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3IssuesecurityschemesIssueSecuritySchemeIdMembersKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuesecurityschemes'][':issueSecuritySchemeId']['members']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issuesecurityschemes/:issueSecuritySchemeId/members', args] as const
}

export function useGetRestApi3IssuesecurityschemesIssueSecuritySchemeIdMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuesecurityschemes'][':issueSecuritySchemeId']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuesecurityschemes'][':issueSecuritySchemeId']['members']['$get']
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
        ? getGetRestApi3IssuesecurityschemesIssueSecuritySchemeIdMembersKey(args)
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
                (typeof client.rest.api)['3']['issuesecurityschemes'][':issueSecuritySchemeId']['members']['$get']
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
          client.rest.api['3'].issuesecurityschemes[':issueSecuritySchemeId'].members.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssuesecurityschemesIssueSecuritySchemeIdMembers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuesecurityschemes'][':issueSecuritySchemeId']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuesecurityschemes'][':issueSecuritySchemeId']['members']['$get']
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
        ? getGetRestApi3IssuesecurityschemesIssueSecuritySchemeIdMembersKey(args)
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
                (typeof client.rest.api)['3']['issuesecurityschemes'][':issueSecuritySchemeId']['members']['$get']
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
          client.rest.api['3'].issuesecurityschemes[':issueSecuritySchemeId'].members.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3IssuetypeKey() {
  return ['rest', '/rest/api/3/issuetype'] as const
}

export function useGetRestApi3Issuetype<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3IssuetypeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].issuetype.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Issuetype<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3IssuetypeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].issuetype.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssuetypeKey() {
  return ['rest', '/rest/api/3/issuetype', 'POST'] as const
}

export function usePostRestApi3Issuetype<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issuetype']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssuetypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['issuetype']['$post']> },
      ) => parseResponse(client.rest.api['3'].issuetype.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssuetypeProjectKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype']['project']['$get']>,
) {
  return ['rest', '/rest/api/3/issuetype/project', args] as const
}

export function useGetRestApi3IssuetypeProject<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype']['project']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype']['project']['$get']>>
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
        ? getGetRestApi3IssuetypeProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype']['project']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].issuetype.project.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssuetypeProject<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype']['project']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype']['project']['$get']>>
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
        ? getGetRestApi3IssuetypeProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype']['project']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].issuetype.project.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3IssuetypeIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/issuetype/:id', args] as const
}

export function useGetRestApi3IssuetypeId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype'][':id']['$get']>>
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
        ? getGetRestApi3IssuetypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].issuetype[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssuetypeId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype'][':id']['$get']>>
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
        ? getGetRestApi3IssuetypeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].issuetype[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3IssuetypeIdKey() {
  return ['rest', '/rest/api/3/issuetype/:id', 'PUT'] as const
}

export function usePutRestApi3IssuetypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssuetypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['$put']> },
      ) => parseResponse(client.rest.api['3'].issuetype[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssuetypeIdKey() {
  return ['rest', '/rest/api/3/issuetype/:id', 'DELETE'] as const
}

export function useDeleteRestApi3IssuetypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssuetypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['$delete']> },
      ) => parseResponse(client.rest.api['3'].issuetype[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssuetypeIdAlternativesKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['alternatives']['$get']>,
) {
  return ['rest', '/rest/api/3/issuetype/:id/alternatives', args] as const
}

export function useGetRestApi3IssuetypeIdAlternatives<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['alternatives']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuetype'][':id']['alternatives']['$get']>
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
        ? getGetRestApi3IssuetypeIdAlternativesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuetype'][':id']['alternatives']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuetype[':id'].alternatives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssuetypeIdAlternatives<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['alternatives']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuetype'][':id']['alternatives']['$get']>
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
        ? getGetRestApi3IssuetypeIdAlternativesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuetype'][':id']['alternatives']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuetype[':id'].alternatives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssuetypeIdAvatar2Key() {
  return ['rest', '/rest/api/3/issuetype/:id/avatar2', 'POST'] as const
}

export function usePostRestApi3IssuetypeIdAvatar2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issuetype'][':id']['avatar2']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issuetype'][':id']['avatar2']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssuetypeIdAvatar2Key()
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
            (typeof client.rest.api)['3']['issuetype'][':id']['avatar2']['$post']
          >
        },
      ) => parseResponse(client.rest.api['3'].issuetype[':id'].avatar2.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssuetypeIssueTypeIdPropertiesKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issuetype/:issueTypeId/properties', args] as const
}

export function useGetRestApi3IssuetypeIssueTypeIdProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties']['$get']
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
        ? getGetRestApi3IssuetypeIssueTypeIdPropertiesKey(args)
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
                (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties']['$get']
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
          client.rest.api['3'].issuetype[':issueTypeId'].properties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssuetypeIssueTypeIdProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties']['$get']
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
        ? getGetRestApi3IssuetypeIssueTypeIdPropertiesKey(args)
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
                (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties']['$get']
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
          client.rest.api['3'].issuetype[':issueTypeId'].properties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$get']
  >,
) {
  return ['rest', '/rest/api/3/issuetype/:issueTypeId/properties/:propertyKey', args] as const
}

export function useGetRestApi3IssuetypeIssueTypeIdPropertiesPropertyKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$get']
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
        ? getGetRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyKey(args)
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
                (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$get']
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
          client.rest.api['3'].issuetype[':issueTypeId'].properties[':propertyKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssuetypeIssueTypeIdPropertiesPropertyKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$get']
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
        ? getGetRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyKey(args)
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
                (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$get']
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
          client.rest.api['3'].issuetype[':issueTypeId'].properties[':propertyKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyKey() {
  return ['rest', '/rest/api/3/issuetype/:issueTypeId/properties/:propertyKey', 'PUT'] as const
}

export function usePutRestApi3IssuetypeIssueTypeIdPropertiesPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issuetype[':issueTypeId'].properties[':propertyKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyKey() {
  return ['rest', '/rest/api/3/issuetype/:issueTypeId/properties/:propertyKey', 'DELETE'] as const
}

export function useDeleteRestApi3IssuetypeIssueTypeIdPropertiesPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['issuetype'][':issueTypeId']['properties'][':propertyKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issuetype[':issueTypeId'].properties[':propertyKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssuetypeschemeKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['$get']>,
) {
  return ['rest', '/rest/api/3/issuetypescheme', args] as const
}

export function useGetRestApi3Issuetypescheme<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescheme']['$get']>>
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
        ? getGetRestApi3IssuetypeschemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].issuetypescheme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Issuetypescheme<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescheme']['$get']>>
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
        ? getGetRestApi3IssuetypeschemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].issuetypescheme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssuetypeschemeKey() {
  return ['rest', '/rest/api/3/issuetypescheme', 'POST'] as const
}

export function usePostRestApi3Issuetypescheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescheme']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssuetypeschemeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['$post']> },
      ) => parseResponse(client.rest.api['3'].issuetypescheme.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssuetypeschemeMappingKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['mapping']['$get']>,
) {
  return ['rest', '/rest/api/3/issuetypescheme/mapping', args] as const
}

export function useGetRestApi3IssuetypeschemeMapping<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['mapping']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescheme']['mapping']['$get']>>
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
        ? getGetRestApi3IssuetypeschemeMappingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescheme']['mapping']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuetypescheme.mapping.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssuetypeschemeMapping<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['mapping']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescheme']['mapping']['$get']>>
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
        ? getGetRestApi3IssuetypeschemeMappingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescheme']['mapping']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuetypescheme.mapping.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3IssuetypeschemeProjectKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['project']['$get']>,
) {
  return ['rest', '/rest/api/3/issuetypescheme/project', args] as const
}

export function useGetRestApi3IssuetypeschemeProject<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['project']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescheme']['project']['$get']>>
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
        ? getGetRestApi3IssuetypeschemeProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescheme']['project']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuetypescheme.project.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssuetypeschemeProject<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['project']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescheme']['project']['$get']>>
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
        ? getGetRestApi3IssuetypeschemeProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescheme']['project']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuetypescheme.project.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3IssuetypeschemeProjectKey() {
  return ['rest', '/rest/api/3/issuetypescheme/project', 'PUT'] as const
}

export function usePutRestApi3IssuetypeschemeProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescheme']['project']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['project']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssuetypeschemeProjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['issuetypescheme']['project']['$put']>
        },
      ) => parseResponse(client.rest.api['3'].issuetypescheme.project.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3IssuetypeschemeIssueTypeSchemeIdKey() {
  return ['rest', '/rest/api/3/issuetypescheme/:issueTypeSchemeId', 'PUT'] as const
}

export function usePutRestApi3IssuetypeschemeIssueTypeSchemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssuetypeschemeIssueTypeSchemeIdKey()
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
            (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issuetypescheme[':issueTypeSchemeId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssuetypeschemeIssueTypeSchemeIdKey() {
  return ['rest', '/rest/api/3/issuetypescheme/:issueTypeSchemeId', 'DELETE'] as const
}

export function useDeleteRestApi3IssuetypeschemeIssueTypeSchemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssuetypeschemeIssueTypeSchemeIdKey()
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
            (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issuetypescheme[':issueTypeSchemeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeKey() {
  return ['rest', '/rest/api/3/issuetypescheme/:issueTypeSchemeId/issuetype', 'PUT'] as const
}

export function usePutRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetype<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['issuetype']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['issuetype']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeKey()
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
            (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['issuetype']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issuetypescheme[':issueTypeSchemeId'].issuetype.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeMoveKey() {
  return ['rest', '/rest/api/3/issuetypescheme/:issueTypeSchemeId/issuetype/move', 'PUT'] as const
}

export function usePutRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeMove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['issuetype']['move']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['issuetype']['move']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeMoveKey()
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
            (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['issuetype']['move']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issuetypescheme[':issueTypeSchemeId'].issuetype.move.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeIssueTypeIdKey() {
  return [
    'rest',
    '/rest/api/3/issuetypescheme/:issueTypeSchemeId/issuetype/:issueTypeId',
    'DELETE',
  ] as const
}

export function useDeleteRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeIssueTypeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['issuetype'][':issueTypeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['issuetype'][':issueTypeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRestApi3IssuetypeschemeIssueTypeSchemeIdIssuetypeIssueTypeIdKey()
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
            (typeof client.rest.api)['3']['issuetypescheme'][':issueTypeSchemeId']['issuetype'][':issueTypeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issuetypescheme[':issueTypeSchemeId'].issuetype[
            ':issueTypeId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssuetypescreenschemeKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['$get']>,
) {
  return ['rest', '/rest/api/3/issuetypescreenscheme', args] as const
}

export function useGetRestApi3Issuetypescreenscheme<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescreenscheme']['$get']>>
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
        ? getGetRestApi3IssuetypescreenschemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescreenscheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuetypescreenscheme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Issuetypescreenscheme<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescreenscheme']['$get']>>
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
        ? getGetRestApi3IssuetypescreenschemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescreenscheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuetypescreenscheme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3IssuetypescreenschemeKey() {
  return ['rest', '/rest/api/3/issuetypescreenscheme', 'POST'] as const
}

export function usePostRestApi3Issuetypescreenscheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['issuetypescreenscheme']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3IssuetypescreenschemeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['$post']>
        },
      ) => parseResponse(client.rest.api['3'].issuetypescreenscheme.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssuetypescreenschemeMappingKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['mapping']['$get']>,
) {
  return ['rest', '/rest/api/3/issuetypescreenscheme/mapping', args] as const
}

export function useGetRestApi3IssuetypescreenschemeMapping<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['mapping']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuetypescreenscheme']['mapping']['$get']>
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
        ? getGetRestApi3IssuetypescreenschemeMappingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuetypescreenscheme']['mapping']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuetypescreenscheme.mapping.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssuetypescreenschemeMapping<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['mapping']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuetypescreenscheme']['mapping']['$get']>
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
        ? getGetRestApi3IssuetypescreenschemeMappingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuetypescreenscheme']['mapping']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuetypescreenscheme.mapping.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3IssuetypescreenschemeProjectKey(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['project']['$get']>,
) {
  return ['rest', '/rest/api/3/issuetypescreenscheme/project', args] as const
}

export function useGetRestApi3IssuetypescreenschemeProject<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['project']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuetypescreenscheme']['project']['$get']>
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
        ? getGetRestApi3IssuetypescreenschemeProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuetypescreenscheme']['project']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuetypescreenscheme.project.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssuetypescreenschemeProject<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['project']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuetypescreenscheme']['project']['$get']>
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
        ? getGetRestApi3IssuetypescreenschemeProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuetypescreenscheme']['project']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].issuetypescreenscheme.project.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3IssuetypescreenschemeProjectKey() {
  return ['rest', '/rest/api/3/issuetypescreenscheme/project', 'PUT'] as const
}

export function usePutRestApi3IssuetypescreenschemeProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['issuetypescreenscheme']['project']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['issuetypescreenscheme']['project']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssuetypescreenschemeProjectKey()
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
            (typeof client.rest.api)['3']['issuetypescreenscheme']['project']['$put']
          >
        },
      ) =>
        parseResponse(client.rest.api['3'].issuetypescreenscheme.project.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdKey() {
  return ['rest', '/rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId', 'PUT'] as const
}

export function usePutRestApi3IssuetypescreenschemeIssueTypeScreenSchemeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdKey()
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
            (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issuetypescreenscheme[':issueTypeScreenSchemeId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdKey() {
  return ['rest', '/rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId', 'DELETE'] as const
}

export function useDeleteRestApi3IssuetypescreenschemeIssueTypeScreenSchemeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdKey()
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
            (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issuetypescreenscheme[':issueTypeScreenSchemeId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingKey() {
  return [
    'rest',
    '/rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId/mapping',
    'PUT',
  ] as const
}

export function usePutRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMapping<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['mapping']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['mapping']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingKey()
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
            (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['mapping']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issuetypescreenscheme[':issueTypeScreenSchemeId'].mapping.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingDefaultKey() {
  return [
    'rest',
    '/rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId/mapping/default',
    'PUT',
  ] as const
}

export function usePutRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingDefault<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['mapping']['default']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['mapping']['default']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingDefaultKey()
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
            (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['mapping']['default']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issuetypescreenscheme[
            ':issueTypeScreenSchemeId'
          ].mapping.default.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRemoveKey() {
  return [
    'rest',
    '/rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId/mapping/remove',
    'POST',
  ] as const
}

export function usePostRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRemove<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['mapping']['remove']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['mapping']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdMappingRemoveKey()
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
            (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['mapping']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].issuetypescreenscheme[
            ':issueTypeScreenSchemeId'
          ].mapping.remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdProjectKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['project']['$get']
  >,
) {
  return [
    'rest',
    '/rest/api/3/issuetypescreenscheme/:issueTypeScreenSchemeId/project',
    args,
  ] as const
}

export function useGetRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdProject<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['project']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['project']['$get']
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
        ? getGetRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdProjectKey(args)
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
                (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['project']['$get']
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
          client.rest.api['3'].issuetypescreenscheme[':issueTypeScreenSchemeId'].project.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdProject<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['project']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['project']['$get']
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
        ? getGetRestApi3IssuetypescreenschemeIssueTypeScreenSchemeIdProjectKey(args)
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
                (typeof client.rest.api)['3']['issuetypescreenscheme'][':issueTypeScreenSchemeId']['project']['$get']
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
          client.rest.api['3'].issuetypescreenscheme[':issueTypeScreenSchemeId'].project.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3JqlAutocompletedataKey() {
  return ['rest', '/rest/api/3/jql/autocompletedata'] as const
}

export function useGetRestApi3JqlAutocompletedata<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['jql']['autocompletedata']['$get']>>
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
        ? getGetRestApi3JqlAutocompletedataKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['jql']['autocompletedata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].jql.autocompletedata.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3JqlAutocompletedata<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['jql']['autocompletedata']['$get']>>
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
        ? getGetRestApi3JqlAutocompletedataKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['jql']['autocompletedata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].jql.autocompletedata.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3JqlAutocompletedataKey() {
  return ['rest', '/rest/api/3/jql/autocompletedata', 'POST'] as const
}

export function usePostRestApi3JqlAutocompletedata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['jql']['autocompletedata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['jql']['autocompletedata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3JqlAutocompletedataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['jql']['autocompletedata']['$post']>
        },
      ) => parseResponse(client.rest.api['3'].jql.autocompletedata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3JqlAutocompletedataSuggestionsKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['jql']['autocompletedata']['suggestions']['$get']
  >,
) {
  return ['rest', '/rest/api/3/jql/autocompletedata/suggestions', args] as const
}

export function useGetRestApi3JqlAutocompletedataSuggestions<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['jql']['autocompletedata']['suggestions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['jql']['autocompletedata']['suggestions']['$get']
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
        ? getGetRestApi3JqlAutocompletedataSuggestionsKey(args)
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
                (typeof client.rest.api)['3']['jql']['autocompletedata']['suggestions']['$get']
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
          client.rest.api['3'].jql.autocompletedata.suggestions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3JqlAutocompletedataSuggestions<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['jql']['autocompletedata']['suggestions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['jql']['autocompletedata']['suggestions']['$get']
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
        ? getGetRestApi3JqlAutocompletedataSuggestionsKey(args)
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
                (typeof client.rest.api)['3']['jql']['autocompletedata']['suggestions']['$get']
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
          client.rest.api['3'].jql.autocompletedata.suggestions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3JqlFunctionComputationKey(
  args: InferRequestType<(typeof client.rest.api)['3']['jql']['function']['computation']['$get']>,
) {
  return ['rest', '/rest/api/3/jql/function/computation', args] as const
}

export function useGetRestApi3JqlFunctionComputation<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['jql']['function']['computation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['jql']['function']['computation']['$get']>
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
        ? getGetRestApi3JqlFunctionComputationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['jql']['function']['computation']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].jql.function.computation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3JqlFunctionComputation<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['jql']['function']['computation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['jql']['function']['computation']['$get']>
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
        ? getGetRestApi3JqlFunctionComputationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['jql']['function']['computation']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].jql.function.computation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3JqlFunctionComputationKey() {
  return ['rest', '/rest/api/3/jql/function/computation', 'POST'] as const
}

export function usePostRestApi3JqlFunctionComputation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['jql']['function']['computation']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['jql']['function']['computation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3JqlFunctionComputationKey()
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
            (typeof client.rest.api)['3']['jql']['function']['computation']['$post']
          >
        },
      ) => parseResponse(client.rest.api['3'].jql.function.computation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3JqlMatchKey() {
  return ['rest', '/rest/api/3/jql/match', 'POST'] as const
}

export function usePostRestApi3JqlMatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['jql']['match']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['jql']['match']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3JqlMatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['jql']['match']['$post']> },
      ) => parseResponse(client.rest.api['3'].jql.match.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3JqlParseKey() {
  return ['rest', '/rest/api/3/jql/parse', 'POST'] as const
}

export function usePostRestApi3JqlParse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['jql']['parse']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['jql']['parse']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3JqlParseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['jql']['parse']['$post']> },
      ) => parseResponse(client.rest.api['3'].jql.parse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3JqlPdcleanerKey() {
  return ['rest', '/rest/api/3/jql/pdcleaner', 'POST'] as const
}

export function usePostRestApi3JqlPdcleaner<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['jql']['pdcleaner']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['jql']['pdcleaner']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3JqlPdcleanerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['jql']['pdcleaner']['$post']> },
      ) => parseResponse(client.rest.api['3'].jql.pdcleaner.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3JqlSanitizeKey() {
  return ['rest', '/rest/api/3/jql/sanitize', 'POST'] as const
}

export function usePostRestApi3JqlSanitize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['jql']['sanitize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['jql']['sanitize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3JqlSanitizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['jql']['sanitize']['$post']> },
      ) => parseResponse(client.rest.api['3'].jql.sanitize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3LabelKey(
  args: InferRequestType<(typeof client.rest.api)['3']['label']['$get']>,
) {
  return ['rest', '/rest/api/3/label', args] as const
}

export function useGetRestApi3Label<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['label']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['label']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3LabelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['label']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].label.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Label<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['label']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['label']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3LabelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['label']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].label.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3LicenseApproximateLicenseCountKey() {
  return ['rest', '/rest/api/3/license/approximateLicenseCount'] as const
}

export function useGetRestApi3LicenseApproximateLicenseCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['license']['approximateLicenseCount']['$get']>
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
        ? getGetRestApi3LicenseApproximateLicenseCountKey()
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
                (typeof client.rest.api)['3']['license']['approximateLicenseCount']['$get']
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
          client.rest.api['3'].license.approximateLicenseCount.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3LicenseApproximateLicenseCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['license']['approximateLicenseCount']['$get']>
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
        ? getGetRestApi3LicenseApproximateLicenseCountKey()
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
                (typeof client.rest.api)['3']['license']['approximateLicenseCount']['$get']
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
          client.rest.api['3'].license.approximateLicenseCount.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3LicenseApproximateLicenseCountProductApplicationKeyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['license']['approximateLicenseCount']['product'][':applicationKey']['$get']
  >,
) {
  return [
    'rest',
    '/rest/api/3/license/approximateLicenseCount/product/:applicationKey',
    args,
  ] as const
}

export function useGetRestApi3LicenseApproximateLicenseCountProductApplicationKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['license']['approximateLicenseCount']['product'][':applicationKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['license']['approximateLicenseCount']['product'][':applicationKey']['$get']
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
        ? getGetRestApi3LicenseApproximateLicenseCountProductApplicationKeyKey(args)
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
                (typeof client.rest.api)['3']['license']['approximateLicenseCount']['product'][':applicationKey']['$get']
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
          client.rest.api['3'].license.approximateLicenseCount.product[':applicationKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3LicenseApproximateLicenseCountProductApplicationKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['license']['approximateLicenseCount']['product'][':applicationKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['license']['approximateLicenseCount']['product'][':applicationKey']['$get']
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
        ? getGetRestApi3LicenseApproximateLicenseCountProductApplicationKeyKey(args)
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
                (typeof client.rest.api)['3']['license']['approximateLicenseCount']['product'][':applicationKey']['$get']
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
          client.rest.api['3'].license.approximateLicenseCount.product[':applicationKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3MypermissionsKey(
  args: InferRequestType<(typeof client.rest.api)['3']['mypermissions']['$get']>,
) {
  return ['rest', '/rest/api/3/mypermissions', args] as const
}

export function useGetRestApi3Mypermissions<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['mypermissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['mypermissions']['$get']>>
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
        ? getGetRestApi3MypermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['mypermissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].mypermissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Mypermissions<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['mypermissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['mypermissions']['$get']>>
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
        ? getGetRestApi3MypermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['mypermissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].mypermissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3MypreferencesKey(
  args: InferRequestType<(typeof client.rest.api)['3']['mypreferences']['$get']>,
) {
  return ['rest', '/rest/api/3/mypreferences', args] as const
}

export function useGetRestApi3Mypreferences<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['mypreferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['mypreferences']['$get']>>
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
        ? getGetRestApi3MypreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['mypreferences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].mypreferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Mypreferences<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['mypreferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['mypreferences']['$get']>>
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
        ? getGetRestApi3MypreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['mypreferences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].mypreferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3MypreferencesKey() {
  return ['rest', '/rest/api/3/mypreferences', 'PUT'] as const
}

export function usePutRestApi3Mypreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['mypreferences']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['mypreferences']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3MypreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['mypreferences']['$put']> },
      ) => parseResponse(client.rest.api['3'].mypreferences.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3MypreferencesKey() {
  return ['rest', '/rest/api/3/mypreferences', 'DELETE'] as const
}

export function useDeleteRestApi3Mypreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['mypreferences']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['mypreferences']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3MypreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['mypreferences']['$delete']> },
      ) => parseResponse(client.rest.api['3'].mypreferences.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3MypreferencesLocaleKey() {
  return ['rest', '/rest/api/3/mypreferences/locale'] as const
}

export function useGetRestApi3MypreferencesLocale<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['mypreferences']['locale']['$get']>>
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
        ? getGetRestApi3MypreferencesLocaleKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['mypreferences']['locale']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].mypreferences.locale.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3MypreferencesLocale<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['mypreferences']['locale']['$get']>>
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
        ? getGetRestApi3MypreferencesLocaleKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['mypreferences']['locale']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].mypreferences.locale.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3MypreferencesLocaleKey() {
  return ['rest', '/rest/api/3/mypreferences/locale', 'PUT'] as const
}

export function usePutRestApi3MypreferencesLocale<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['mypreferences']['locale']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['mypreferences']['locale']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3MypreferencesLocaleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['mypreferences']['locale']['$put']>
        },
      ) => parseResponse(client.rest.api['3'].mypreferences.locale.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3MypreferencesLocaleKey() {
  return ['rest', '/rest/api/3/mypreferences/locale', 'DELETE'] as const
}

export function useDeleteRestApi3MypreferencesLocale<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['mypreferences']['locale']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3MypreferencesLocaleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].mypreferences.locale.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3MyselfKey(
  args: InferRequestType<(typeof client.rest.api)['3']['myself']['$get']>,
) {
  return ['rest', '/rest/api/3/myself', args] as const
}

export function useGetRestApi3Myself<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['myself']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['myself']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3MyselfKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['myself']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].myself.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Myself<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['myself']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['myself']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3MyselfKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['myself']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].myself.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3NotificationschemeKey(
  args: InferRequestType<(typeof client.rest.api)['3']['notificationscheme']['$get']>,
) {
  return ['rest', '/rest/api/3/notificationscheme', args] as const
}

export function useGetRestApi3Notificationscheme<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['notificationscheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['notificationscheme']['$get']>>
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
        ? getGetRestApi3NotificationschemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['notificationscheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].notificationscheme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Notificationscheme<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['notificationscheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['notificationscheme']['$get']>>
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
        ? getGetRestApi3NotificationschemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['notificationscheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].notificationscheme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3NotificationschemeKey() {
  return ['rest', '/rest/api/3/notificationscheme', 'POST'] as const
}

export function usePostRestApi3Notificationscheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['notificationscheme']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['notificationscheme']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3NotificationschemeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['notificationscheme']['$post']> },
      ) => parseResponse(client.rest.api['3'].notificationscheme.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3NotificationschemeProjectKey(
  args: InferRequestType<(typeof client.rest.api)['3']['notificationscheme']['project']['$get']>,
) {
  return ['rest', '/rest/api/3/notificationscheme/project', args] as const
}

export function useGetRestApi3NotificationschemeProject<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['notificationscheme']['project']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['notificationscheme']['project']['$get']>
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
        ? getGetRestApi3NotificationschemeProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['notificationscheme']['project']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].notificationscheme.project.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3NotificationschemeProject<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['notificationscheme']['project']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['notificationscheme']['project']['$get']>
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
        ? getGetRestApi3NotificationschemeProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['notificationscheme']['project']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].notificationscheme.project.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3NotificationschemeIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['notificationscheme'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/notificationscheme/:id', args] as const
}

export function useGetRestApi3NotificationschemeId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['notificationscheme'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['notificationscheme'][':id']['$get']>>
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
        ? getGetRestApi3NotificationschemeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['notificationscheme'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].notificationscheme[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3NotificationschemeId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['notificationscheme'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['notificationscheme'][':id']['$get']>>
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
        ? getGetRestApi3NotificationschemeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['notificationscheme'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].notificationscheme[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3NotificationschemeIdKey() {
  return ['rest', '/rest/api/3/notificationscheme/:id', 'PUT'] as const
}

export function usePutRestApi3NotificationschemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['notificationscheme'][':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['notificationscheme'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3NotificationschemeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['notificationscheme'][':id']['$put']>
        },
      ) => parseResponse(client.rest.api['3'].notificationscheme[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3NotificationschemeIdNotificationKey() {
  return ['rest', '/rest/api/3/notificationscheme/:id/notification', 'PUT'] as const
}

export function usePutRestApi3NotificationschemeIdNotification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['notificationscheme'][':id']['notification']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['notificationscheme'][':id']['notification']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3NotificationschemeIdNotificationKey()
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
            (typeof client.rest.api)['3']['notificationscheme'][':id']['notification']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].notificationscheme[':id'].notification.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3NotificationschemeNotificationSchemeIdKey() {
  return ['rest', '/rest/api/3/notificationscheme/:notificationSchemeId', 'DELETE'] as const
}

export function useDeleteRestApi3NotificationschemeNotificationSchemeId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['notificationscheme'][':notificationSchemeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['notificationscheme'][':notificationSchemeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3NotificationschemeNotificationSchemeIdKey()
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
            (typeof client.rest.api)['3']['notificationscheme'][':notificationSchemeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].notificationscheme[':notificationSchemeId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3NotificationschemeNotificationSchemeIdNotificationNotificationIdKey() {
  return [
    'rest',
    '/rest/api/3/notificationscheme/:notificationSchemeId/notification/:notificationId',
    'DELETE',
  ] as const
}

export function useDeleteRestApi3NotificationschemeNotificationSchemeIdNotificationNotificationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['notificationscheme'][':notificationSchemeId']['notification'][':notificationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['notificationscheme'][':notificationSchemeId']['notification'][':notificationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteRestApi3NotificationschemeNotificationSchemeIdNotificationNotificationIdKey()
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
            (typeof client.rest.api)['3']['notificationscheme'][':notificationSchemeId']['notification'][':notificationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].notificationscheme[':notificationSchemeId'].notification[
            ':notificationId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3PermissionsKey() {
  return ['rest', '/rest/api/3/permissions'] as const
}

export function useGetRestApi3Permissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['permissions']['$get']>>
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
        ? getGetRestApi3PermissionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].permissions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Permissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['permissions']['$get']>>
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
        ? getGetRestApi3PermissionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].permissions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3PermissionsCheckKey() {
  return ['rest', '/rest/api/3/permissions/check', 'POST'] as const
}

export function usePostRestApi3PermissionsCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['permissions']['check']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['permissions']['check']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3PermissionsCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['permissions']['check']['$post']>
        },
      ) => parseResponse(client.rest.api['3'].permissions.check.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3PermissionsProjectKey() {
  return ['rest', '/rest/api/3/permissions/project', 'POST'] as const
}

export function usePostRestApi3PermissionsProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['permissions']['project']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['permissions']['project']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3PermissionsProjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['permissions']['project']['$post']>
        },
      ) => parseResponse(client.rest.api['3'].permissions.project.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3PermissionschemeKey(
  args: InferRequestType<(typeof client.rest.api)['3']['permissionscheme']['$get']>,
) {
  return ['rest', '/rest/api/3/permissionscheme', args] as const
}

export function useGetRestApi3Permissionscheme<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['permissionscheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['permissionscheme']['$get']>>
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
        ? getGetRestApi3PermissionschemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['permissionscheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].permissionscheme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Permissionscheme<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['permissionscheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['permissionscheme']['$get']>>
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
        ? getGetRestApi3PermissionschemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['permissionscheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].permissionscheme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3PermissionschemeKey() {
  return ['rest', '/rest/api/3/permissionscheme', 'POST'] as const
}

export function usePostRestApi3Permissionscheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['permissionscheme']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['permissionscheme']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3PermissionschemeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['permissionscheme']['$post']> },
      ) => parseResponse(client.rest.api['3'].permissionscheme.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3PermissionschemeSchemeIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$get']>,
) {
  return ['rest', '/rest/api/3/permissionscheme/:schemeId', args] as const
}

export function useGetRestApi3PermissionschemeSchemeId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$get']>
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
        ? getGetRestApi3PermissionschemeSchemeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].permissionscheme[':schemeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3PermissionschemeSchemeId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$get']>
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
        ? getGetRestApi3PermissionschemeSchemeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].permissionscheme[':schemeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3PermissionschemeSchemeIdKey() {
  return ['rest', '/rest/api/3/permissionscheme/:schemeId', 'PUT'] as const
}

export function usePutRestApi3PermissionschemeSchemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3PermissionschemeSchemeIdKey()
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
            (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$put']
          >
        },
      ) =>
        parseResponse(client.rest.api['3'].permissionscheme[':schemeId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3PermissionschemeSchemeIdKey() {
  return ['rest', '/rest/api/3/permissionscheme/:schemeId', 'DELETE'] as const
}

export function useDeleteRestApi3PermissionschemeSchemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3PermissionschemeSchemeIdKey()
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
            (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].permissionscheme[':schemeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3PermissionschemeSchemeIdPermissionKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission']['$get']
  >,
) {
  return ['rest', '/rest/api/3/permissionscheme/:schemeId/permission', args] as const
}

export function useGetRestApi3PermissionschemeSchemeIdPermission<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission']['$get']
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
        ? getGetRestApi3PermissionschemeSchemeIdPermissionKey(args)
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
                (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission']['$get']
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
          client.rest.api['3'].permissionscheme[':schemeId'].permission.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3PermissionschemeSchemeIdPermission<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission']['$get']
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
        ? getGetRestApi3PermissionschemeSchemeIdPermissionKey(args)
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
                (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission']['$get']
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
          client.rest.api['3'].permissionscheme[':schemeId'].permission.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3PermissionschemeSchemeIdPermissionKey() {
  return ['rest', '/rest/api/3/permissionscheme/:schemeId/permission', 'POST'] as const
}

export function usePostRestApi3PermissionschemeSchemeIdPermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3PermissionschemeSchemeIdPermissionKey()
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
            (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].permissionscheme[':schemeId'].permission.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3PermissionschemeSchemeIdPermissionPermissionIdKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission'][':permissionId']['$get']
  >,
) {
  return ['rest', '/rest/api/3/permissionscheme/:schemeId/permission/:permissionId', args] as const
}

export function useGetRestApi3PermissionschemeSchemeIdPermissionPermissionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission'][':permissionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission'][':permissionId']['$get']
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
        ? getGetRestApi3PermissionschemeSchemeIdPermissionPermissionIdKey(args)
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
                (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission'][':permissionId']['$get']
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
          client.rest.api['3'].permissionscheme[':schemeId'].permission[':permissionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3PermissionschemeSchemeIdPermissionPermissionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission'][':permissionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission'][':permissionId']['$get']
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
        ? getGetRestApi3PermissionschemeSchemeIdPermissionPermissionIdKey(args)
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
                (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission'][':permissionId']['$get']
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
          client.rest.api['3'].permissionscheme[':schemeId'].permission[':permissionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteRestApi3PermissionschemeSchemeIdPermissionPermissionIdKey() {
  return [
    'rest',
    '/rest/api/3/permissionscheme/:schemeId/permission/:permissionId',
    'DELETE',
  ] as const
}

export function useDeleteRestApi3PermissionschemeSchemeIdPermissionPermissionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission'][':permissionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission'][':permissionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3PermissionschemeSchemeIdPermissionPermissionIdKey()
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
            (typeof client.rest.api)['3']['permissionscheme'][':schemeId']['permission'][':permissionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].permissionscheme[':schemeId'].permission[':permissionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3PriorityKey() {
  return ['rest', '/rest/api/3/priority'] as const
}

export function useGetRestApi3Priority<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['priority']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestApi3PriorityKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['priority']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].priority.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Priority<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['priority']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestApi3PriorityKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['priority']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].priority.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3PriorityKey() {
  return ['rest', '/rest/api/3/priority', 'POST'] as const
}

export function usePostRestApi3Priority<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['priority']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['priority']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3PriorityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['priority']['$post']> },
      ) => parseResponse(client.rest.api['3'].priority.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3PriorityDefaultKey() {
  return ['rest', '/rest/api/3/priority/default', 'PUT'] as const
}

export function usePutRestApi3PriorityDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['priority']['default']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['priority']['default']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3PriorityDefaultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['priority']['default']['$put']> },
      ) => parseResponse(client.rest.api['3'].priority.default.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3PriorityMoveKey() {
  return ['rest', '/rest/api/3/priority/move', 'PUT'] as const
}

export function usePutRestApi3PriorityMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['priority']['move']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['priority']['move']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3PriorityMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['priority']['move']['$put']> },
      ) => parseResponse(client.rest.api['3'].priority.move.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3PrioritySearchKey(
  args: InferRequestType<(typeof client.rest.api)['3']['priority']['search']['$get']>,
) {
  return ['rest', '/rest/api/3/priority/search', args] as const
}

export function useGetRestApi3PrioritySearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['priority']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['priority']['search']['$get']>>
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
        ? getGetRestApi3PrioritySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['priority']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].priority.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3PrioritySearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['priority']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['priority']['search']['$get']>>
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
        ? getGetRestApi3PrioritySearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['priority']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].priority.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3PriorityIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['priority'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/priority/:id', args] as const
}

export function useGetRestApi3PriorityId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['priority'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['priority'][':id']['$get']>>
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
        ? getGetRestApi3PriorityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['priority'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].priority[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3PriorityId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['priority'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['priority'][':id']['$get']>>
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
        ? getGetRestApi3PriorityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['priority'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].priority[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3PriorityIdKey() {
  return ['rest', '/rest/api/3/priority/:id', 'PUT'] as const
}

export function usePutRestApi3PriorityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['priority'][':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['priority'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3PriorityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['priority'][':id']['$put']> },
      ) => parseResponse(client.rest.api['3'].priority[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3PriorityIdKey() {
  return ['rest', '/rest/api/3/priority/:id', 'DELETE'] as const
}

export function useDeleteRestApi3PriorityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['priority'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['priority'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3PriorityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['priority'][':id']['$delete']> },
      ) => parseResponse(client.rest.api['3'].priority[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ProjectKey(
  args: InferRequestType<(typeof client.rest.api)['3']['project']['$get']>,
) {
  return ['rest', '/rest/api/3/project', args] as const
}

export function useGetRestApi3Project<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['project']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project']['$get']>>
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
        ? getGetRestApi3ProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].project.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Project<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['project']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project']['$get']>>
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
        ? getGetRestApi3ProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].project.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3ProjectKey() {
  return ['rest', '/rest/api/3/project', 'POST'] as const
}

export function usePostRestApi3Project<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['project']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['project']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ProjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['project']['$post']> },
      ) => parseResponse(client.rest.api['3'].project.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ProjectRecentKey(
  args: InferRequestType<(typeof client.rest.api)['3']['project']['recent']['$get']>,
) {
  return ['rest', '/rest/api/3/project/recent', args] as const
}

export function useGetRestApi3ProjectRecent<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['project']['recent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project']['recent']['$get']>>
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
        ? getGetRestApi3ProjectRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project']['recent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].project.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectRecent<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['project']['recent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project']['recent']['$get']>>
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
        ? getGetRestApi3ProjectRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project']['recent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].project.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectSearchKey(
  args: InferRequestType<(typeof client.rest.api)['3']['project']['search']['$get']>,
) {
  return ['rest', '/rest/api/3/project/search', args] as const
}

export function useGetRestApi3ProjectSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['project']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project']['search']['$get']>>
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
        ? getGetRestApi3ProjectSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].project.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['project']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project']['search']['$get']>>
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
        ? getGetRestApi3ProjectSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].project.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectTypeKey() {
  return ['rest', '/rest/api/3/project/type'] as const
}

export function useGetRestApi3ProjectType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['project']['type']['$get']>>
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
        ? getGetRestApi3ProjectTypeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project']['type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].project.type.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectType<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['project']['type']['$get']>>
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
        ? getGetRestApi3ProjectTypeKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project']['type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].project.type.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectTypeAccessibleKey() {
  return ['rest', '/rest/api/3/project/type/accessible'] as const
}

export function useGetRestApi3ProjectTypeAccessible<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['project']['type']['accessible']['$get']>
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
        ? getGetRestApi3ProjectTypeAccessibleKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['project']['type']['accessible']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].project.type.accessible.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectTypeAccessible<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['project']['type']['accessible']['$get']>
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
        ? getGetRestApi3ProjectTypeAccessibleKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['project']['type']['accessible']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].project.type.accessible.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectTypeProjectTypeKeyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/type/:projectTypeKey', args] as const
}

export function useGetRestApi3ProjectTypeProjectTypeKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['$get']
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
        ? getGetRestApi3ProjectTypeProjectTypeKeyKey(args)
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
                (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['$get']
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
          client.rest.api['3'].project.type[':projectTypeKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectTypeProjectTypeKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['$get']
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
        ? getGetRestApi3ProjectTypeProjectTypeKeyKey(args)
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
                (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['$get']
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
          client.rest.api['3'].project.type[':projectTypeKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectTypeProjectTypeKeyAccessibleKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['accessible']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/type/:projectTypeKey/accessible', args] as const
}

export function useGetRestApi3ProjectTypeProjectTypeKeyAccessible<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['accessible']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['accessible']['$get']
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
        ? getGetRestApi3ProjectTypeProjectTypeKeyAccessibleKey(args)
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
                (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['accessible']['$get']
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
          client.rest.api['3'].project.type[':projectTypeKey'].accessible.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectTypeProjectTypeKeyAccessible<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['accessible']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['accessible']['$get']
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
        ? getGetRestApi3ProjectTypeProjectTypeKeyAccessibleKey(args)
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
                (typeof client.rest.api)['3']['project']['type'][':projectTypeKey']['accessible']['$get']
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
          client.rest.api['3'].project.type[':projectTypeKey'].accessible.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdOrKeyKey(
  args: InferRequestType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$get']>,
) {
  return ['rest', '/rest/api/3/project/:projectIdOrKey', args] as const
}

export function useGetRestApi3ProjectProjectIdOrKey<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$get']>>
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
        ? getGetRestApi3ProjectProjectIdOrKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].project[':projectIdOrKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdOrKey<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$get']>>
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
        ? getGetRestApi3ProjectProjectIdOrKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].project[':projectIdOrKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3ProjectProjectIdOrKeyKey() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey', 'PUT'] as const
}

export function usePutRestApi3ProjectProjectIdOrKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ProjectProjectIdOrKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$put']>
        },
      ) => parseResponse(client.rest.api['3'].project[':projectIdOrKey'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3ProjectProjectIdOrKeyKey() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey', 'DELETE'] as const
}

export function useDeleteRestApi3ProjectProjectIdOrKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3ProjectProjectIdOrKeyKey()
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
            (typeof client.rest.api)['3']['project'][':projectIdOrKey']['$delete']
          >
        },
      ) =>
        parseResponse(client.rest.api['3'].project[':projectIdOrKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3ProjectProjectIdOrKeyArchiveKey() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/archive', 'POST'] as const
}

export function usePostRestApi3ProjectProjectIdOrKeyArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['project'][':projectIdOrKey']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ProjectProjectIdOrKeyArchiveKey()
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
            (typeof client.rest.api)['3']['project'][':projectIdOrKey']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].project[':projectIdOrKey'].archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3ProjectProjectIdOrKeyAvatarKey() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/avatar', 'PUT'] as const
}

export function usePutRestApi3ProjectProjectIdOrKeyAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatar']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatar']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ProjectProjectIdOrKeyAvatarKey()
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
            (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatar']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].project[':projectIdOrKey'].avatar.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3ProjectProjectIdOrKeyAvatarIdKey() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/avatar/:id', 'DELETE'] as const
}

export function useDeleteRestApi3ProjectProjectIdOrKeyAvatarId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatar'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatar'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3ProjectProjectIdOrKeyAvatarIdKey()
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
            (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatar'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].project[':projectIdOrKey'].avatar[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3ProjectProjectIdOrKeyAvatar2Key() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/avatar2', 'POST'] as const
}

export function usePostRestApi3ProjectProjectIdOrKeyAvatar2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatar2']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatar2']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ProjectProjectIdOrKeyAvatar2Key()
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
            (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatar2']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].project[':projectIdOrKey'].avatar2.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdOrKeyAvatarsKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatars']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/avatars', args] as const
}

export function useGetRestApi3ProjectProjectIdOrKeyAvatars<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatars']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatars']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyAvatarsKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatars']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].avatars.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdOrKeyAvatars<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatars']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatars']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyAvatarsKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['avatars']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].avatars.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdOrKeyComponentKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['component']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/component', args] as const
}

export function useGetRestApi3ProjectProjectIdOrKeyComponent<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['component']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['component']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyComponentKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['component']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].component.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdOrKeyComponent<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['component']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['component']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyComponentKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['component']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].component.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdOrKeyComponentsKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['components']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/components', args] as const
}

export function useGetRestApi3ProjectProjectIdOrKeyComponents<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['components']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['components']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyComponentsKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['components']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].components.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdOrKeyComponents<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['components']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['components']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyComponentsKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['components']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].components.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3ProjectProjectIdOrKeyDeleteKey() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/delete', 'POST'] as const
}

export function usePostRestApi3ProjectProjectIdOrKeyDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['project'][':projectIdOrKey']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['project'][':projectIdOrKey']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ProjectProjectIdOrKeyDeleteKey()
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
            (typeof client.rest.api)['3']['project'][':projectIdOrKey']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].project[':projectIdOrKey'].delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdOrKeyFeaturesKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['features']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/features', args] as const
}

export function useGetRestApi3ProjectProjectIdOrKeyFeatures<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['features']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['features']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyFeaturesKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['features']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].features.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdOrKeyFeatures<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['features']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['features']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyFeaturesKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['features']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].features.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3ProjectProjectIdOrKeyFeaturesFeatureKeyKey() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/features/:featureKey', 'PUT'] as const
}

export function usePutRestApi3ProjectProjectIdOrKeyFeaturesFeatureKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['project'][':projectIdOrKey']['features'][':featureKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['project'][':projectIdOrKey']['features'][':featureKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ProjectProjectIdOrKeyFeaturesFeatureKeyKey()
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
            (typeof client.rest.api)['3']['project'][':projectIdOrKey']['features'][':featureKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].project[':projectIdOrKey'].features[':featureKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdOrKeyPropertiesKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/properties', args] as const
}

export function useGetRestApi3ProjectProjectIdOrKeyProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyPropertiesKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].properties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdOrKeyProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyPropertiesKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].properties.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/properties/:propertyKey', args] as const
}

export function useGetRestApi3ProjectProjectIdOrKeyPropertiesPropertyKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].properties[':propertyKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdOrKeyPropertiesPropertyKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].properties[':propertyKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyKey() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/properties/:propertyKey', 'PUT'] as const
}

export function usePutRestApi3ProjectProjectIdOrKeyPropertiesPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].project[':projectIdOrKey'].properties[':propertyKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyKey() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/properties/:propertyKey', 'DELETE'] as const
}

export function useDeleteRestApi3ProjectProjectIdOrKeyPropertiesPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['project'][':projectIdOrKey']['properties'][':propertyKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].project[':projectIdOrKey'].properties[':propertyKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3ProjectProjectIdOrKeyRestoreKey() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/restore', 'POST'] as const
}

export function usePostRestApi3ProjectProjectIdOrKeyRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['project'][':projectIdOrKey']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['project'][':projectIdOrKey']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ProjectProjectIdOrKeyRestoreKey()
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
            (typeof client.rest.api)['3']['project'][':projectIdOrKey']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].project[':projectIdOrKey'].restore.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdOrKeyRoleKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/role', args] as const
}

export function useGetRestApi3ProjectProjectIdOrKeyRole<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyRoleKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].role.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdOrKeyRole<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyRoleKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].role.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdOrKeyRoleIdKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/role/:id', args] as const
}

export function useGetRestApi3ProjectProjectIdOrKeyRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyRoleIdKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].role[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdOrKeyRoleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyRoleIdKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].role[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3ProjectProjectIdOrKeyRoleIdKey() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/role/:id', 'PUT'] as const
}

export function usePutRestApi3ProjectProjectIdOrKeyRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ProjectProjectIdOrKeyRoleIdKey()
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
            (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].project[':projectIdOrKey'].role[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3ProjectProjectIdOrKeyRoleIdKey() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/role/:id', 'POST'] as const
}

export function usePostRestApi3ProjectProjectIdOrKeyRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ProjectProjectIdOrKeyRoleIdKey()
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
            (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].project[':projectIdOrKey'].role[':id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3ProjectProjectIdOrKeyRoleIdKey() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/role/:id', 'DELETE'] as const
}

export function useDeleteRestApi3ProjectProjectIdOrKeyRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3ProjectProjectIdOrKeyRoleIdKey()
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
            (typeof client.rest.api)['3']['project'][':projectIdOrKey']['role'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].project[':projectIdOrKey'].role[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdOrKeyRoledetailsKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['roledetails']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/roledetails', args] as const
}

export function useGetRestApi3ProjectProjectIdOrKeyRoledetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['roledetails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['roledetails']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyRoledetailsKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['roledetails']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].roledetails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdOrKeyRoledetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['roledetails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['roledetails']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyRoledetailsKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['roledetails']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].roledetails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdOrKeyStatusesKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['statuses']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/statuses', args] as const
}

export function useGetRestApi3ProjectProjectIdOrKeyStatuses<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['statuses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['statuses']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyStatusesKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['statuses']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].statuses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdOrKeyStatuses<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['statuses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['statuses']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyStatusesKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['statuses']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].statuses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyKey() {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/type/:newProjectTypeKey', 'PUT'] as const
}

export function usePutRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['project'][':projectIdOrKey']['type'][':newProjectTypeKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['project'][':projectIdOrKey']['type'][':newProjectTypeKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyKey()
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
            (typeof client.rest.api)['3']['project'][':projectIdOrKey']['type'][':newProjectTypeKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].project[':projectIdOrKey'].type[':newProjectTypeKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdOrKeyVersionKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['version']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/version', args] as const
}

export function useGetRestApi3ProjectProjectIdOrKeyVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['version']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyVersionKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['version']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].version.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdOrKeyVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['version']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['version']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyVersionKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['version']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].version.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdOrKeyVersionsKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['versions']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectIdOrKey/versions', args] as const
}

export function useGetRestApi3ProjectProjectIdOrKeyVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['versions']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyVersionsKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['versions']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdOrKeyVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectIdOrKey']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['versions']['$get']
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
        ? getGetRestApi3ProjectProjectIdOrKeyVersionsKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectIdOrKey']['versions']['$get']
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
          client.rest.api['3'].project[':projectIdOrKey'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdEmailKey(
  args: InferRequestType<(typeof client.rest.api)['3']['project'][':projectId']['email']['$get']>,
) {
  return ['rest', '/rest/api/3/project/:projectId/email', args] as const
}

export function useGetRestApi3ProjectProjectIdEmail<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['project'][':projectId']['email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['project'][':projectId']['email']['$get']>
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
        ? getGetRestApi3ProjectProjectIdEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['project'][':projectId']['email']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].project[':projectId'].email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdEmail<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['project'][':projectId']['email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['project'][':projectId']['email']['$get']>
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
        ? getGetRestApi3ProjectProjectIdEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['project'][':projectId']['email']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].project[':projectId'].email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3ProjectProjectIdEmailKey() {
  return ['rest', '/rest/api/3/project/:projectId/email', 'PUT'] as const
}

export function usePutRestApi3ProjectProjectIdEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['project'][':projectId']['email']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['project'][':projectId']['email']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ProjectProjectIdEmailKey()
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
            (typeof client.rest.api)['3']['project'][':projectId']['email']['$put']
          >
        },
      ) => parseResponse(client.rest.api['3'].project[':projectId'].email.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectIdHierarchyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectId']['hierarchy']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectId/hierarchy', args] as const
}

export function useGetRestApi3ProjectProjectIdHierarchy<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectId']['hierarchy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectId']['hierarchy']['$get']
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
        ? getGetRestApi3ProjectProjectIdHierarchyKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectId']['hierarchy']['$get']
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
          client.rest.api['3'].project[':projectId'].hierarchy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectIdHierarchy<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectId']['hierarchy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectId']['hierarchy']['$get']
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
        ? getGetRestApi3ProjectProjectIdHierarchyKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectId']['hierarchy']['$get']
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
          client.rest.api['3'].project[':projectId'].hierarchy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['issuesecuritylevelscheme']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectKeyOrId/issuesecuritylevelscheme', args] as const
}

export function useGetRestApi3ProjectProjectKeyOrIdIssuesecuritylevelscheme<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['issuesecuritylevelscheme']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['issuesecuritylevelscheme']['$get']
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
        ? getGetRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['issuesecuritylevelscheme']['$get']
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
          client.rest.api['3'].project[':projectKeyOrId'].issuesecuritylevelscheme.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectKeyOrIdIssuesecuritylevelscheme<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['issuesecuritylevelscheme']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['issuesecuritylevelscheme']['$get']
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
        ? getGetRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['issuesecuritylevelscheme']['$get']
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
          client.rest.api['3'].project[':projectKeyOrId'].issuesecuritylevelscheme.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectKeyOrIdNotificationschemeKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['notificationscheme']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectKeyOrId/notificationscheme', args] as const
}

export function useGetRestApi3ProjectProjectKeyOrIdNotificationscheme<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['notificationscheme']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['notificationscheme']['$get']
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
        ? getGetRestApi3ProjectProjectKeyOrIdNotificationschemeKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['notificationscheme']['$get']
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
          client.rest.api['3'].project[':projectKeyOrId'].notificationscheme.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectKeyOrIdNotificationscheme<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['notificationscheme']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['notificationscheme']['$get']
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
        ? getGetRestApi3ProjectProjectKeyOrIdNotificationschemeKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['notificationscheme']['$get']
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
          client.rest.api['3'].project[':projectKeyOrId'].notificationscheme.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectKeyOrIdPermissionschemeKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['permissionscheme']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectKeyOrId/permissionscheme', args] as const
}

export function useGetRestApi3ProjectProjectKeyOrIdPermissionscheme<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['permissionscheme']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['permissionscheme']['$get']
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
        ? getGetRestApi3ProjectProjectKeyOrIdPermissionschemeKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['permissionscheme']['$get']
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
          client.rest.api['3'].project[':projectKeyOrId'].permissionscheme.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectKeyOrIdPermissionscheme<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['permissionscheme']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['permissionscheme']['$get']
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
        ? getGetRestApi3ProjectProjectKeyOrIdPermissionschemeKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['permissionscheme']['$get']
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
          client.rest.api['3'].project[':projectKeyOrId'].permissionscheme.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3ProjectProjectKeyOrIdPermissionschemeKey() {
  return ['rest', '/rest/api/3/project/:projectKeyOrId/permissionscheme', 'PUT'] as const
}

export function usePutRestApi3ProjectProjectKeyOrIdPermissionscheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['project'][':projectKeyOrId']['permissionscheme']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['project'][':projectKeyOrId']['permissionscheme']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ProjectProjectKeyOrIdPermissionschemeKey()
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
            (typeof client.rest.api)['3']['project'][':projectKeyOrId']['permissionscheme']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].project[':projectKeyOrId'].permissionscheme.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ProjectProjectKeyOrIdSecuritylevelKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['securitylevel']['$get']
  >,
) {
  return ['rest', '/rest/api/3/project/:projectKeyOrId/securitylevel', args] as const
}

export function useGetRestApi3ProjectProjectKeyOrIdSecuritylevel<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['securitylevel']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['securitylevel']['$get']
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
        ? getGetRestApi3ProjectProjectKeyOrIdSecuritylevelKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['securitylevel']['$get']
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
          client.rest.api['3'].project[':projectKeyOrId'].securitylevel.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectProjectKeyOrIdSecuritylevel<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['project'][':projectKeyOrId']['securitylevel']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['securitylevel']['$get']
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
        ? getGetRestApi3ProjectProjectKeyOrIdSecuritylevelKey(args)
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
                (typeof client.rest.api)['3']['project'][':projectKeyOrId']['securitylevel']['$get']
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
          client.rest.api['3'].project[':projectKeyOrId'].securitylevel.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectCategoryKey() {
  return ['rest', '/rest/api/3/projectCategory'] as const
}

export function useGetRestApi3ProjectCategory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['projectCategory']['$get']>>
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
        ? getGetRestApi3ProjectCategoryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['projectCategory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].projectCategory.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectCategory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['projectCategory']['$get']>>
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
        ? getGetRestApi3ProjectCategoryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['projectCategory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].projectCategory.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3ProjectCategoryKey() {
  return ['rest', '/rest/api/3/projectCategory', 'POST'] as const
}

export function usePostRestApi3ProjectCategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['projectCategory']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['projectCategory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ProjectCategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['projectCategory']['$post']> },
      ) => parseResponse(client.rest.api['3'].projectCategory.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ProjectCategoryIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['projectCategory'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/projectCategory/:id', args] as const
}

export function useGetRestApi3ProjectCategoryId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['projectCategory'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['projectCategory'][':id']['$get']>>
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
        ? getGetRestApi3ProjectCategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['projectCategory'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].projectCategory[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectCategoryId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['projectCategory'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['projectCategory'][':id']['$get']>>
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
        ? getGetRestApi3ProjectCategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['projectCategory'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].projectCategory[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3ProjectCategoryIdKey() {
  return ['rest', '/rest/api/3/projectCategory/:id', 'PUT'] as const
}

export function usePutRestApi3ProjectCategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['projectCategory'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['projectCategory'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ProjectCategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['projectCategory'][':id']['$put']>
        },
      ) => parseResponse(client.rest.api['3'].projectCategory[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3ProjectCategoryIdKey() {
  return ['rest', '/rest/api/3/projectCategory/:id', 'DELETE'] as const
}

export function useDeleteRestApi3ProjectCategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['projectCategory'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['projectCategory'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3ProjectCategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['projectCategory'][':id']['$delete']>
        },
      ) => parseResponse(client.rest.api['3'].projectCategory[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ProjectvalidateKeyKey(
  args: InferRequestType<(typeof client.rest.api)['3']['projectvalidate']['key']['$get']>,
) {
  return ['rest', '/rest/api/3/projectvalidate/key', args] as const
}

export function useGetRestApi3ProjectvalidateKey<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['projectvalidate']['key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['projectvalidate']['key']['$get']>>
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
        ? getGetRestApi3ProjectvalidateKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['projectvalidate']['key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].projectvalidate.key.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectvalidateKey<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['projectvalidate']['key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['projectvalidate']['key']['$get']>>
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
        ? getGetRestApi3ProjectvalidateKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['projectvalidate']['key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].projectvalidate.key.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectvalidateValidProjectKeyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['projectvalidate']['validProjectKey']['$get']
  >,
) {
  return ['rest', '/rest/api/3/projectvalidate/validProjectKey', args] as const
}

export function useGetRestApi3ProjectvalidateValidProjectKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['projectvalidate']['validProjectKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['projectvalidate']['validProjectKey']['$get']
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
        ? getGetRestApi3ProjectvalidateValidProjectKeyKey(args)
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
                (typeof client.rest.api)['3']['projectvalidate']['validProjectKey']['$get']
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
          client.rest.api['3'].projectvalidate.validProjectKey.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectvalidateValidProjectKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['projectvalidate']['validProjectKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['projectvalidate']['validProjectKey']['$get']
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
        ? getGetRestApi3ProjectvalidateValidProjectKeyKey(args)
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
                (typeof client.rest.api)['3']['projectvalidate']['validProjectKey']['$get']
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
          client.rest.api['3'].projectvalidate.validProjectKey.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ProjectvalidateValidProjectNameKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['projectvalidate']['validProjectName']['$get']
  >,
) {
  return ['rest', '/rest/api/3/projectvalidate/validProjectName', args] as const
}

export function useGetRestApi3ProjectvalidateValidProjectName<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['projectvalidate']['validProjectName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['projectvalidate']['validProjectName']['$get']
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
        ? getGetRestApi3ProjectvalidateValidProjectNameKey(args)
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
                (typeof client.rest.api)['3']['projectvalidate']['validProjectName']['$get']
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
          client.rest.api['3'].projectvalidate.validProjectName.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ProjectvalidateValidProjectName<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['projectvalidate']['validProjectName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['projectvalidate']['validProjectName']['$get']
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
        ? getGetRestApi3ProjectvalidateValidProjectNameKey(args)
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
                (typeof client.rest.api)['3']['projectvalidate']['validProjectName']['$get']
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
          client.rest.api['3'].projectvalidate.validProjectName.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ResolutionKey() {
  return ['rest', '/rest/api/3/resolution'] as const
}

export function useGetRestApi3Resolution<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['resolution']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3ResolutionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['resolution']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].resolution.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Resolution<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['resolution']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3ResolutionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['resolution']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].resolution.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3ResolutionKey() {
  return ['rest', '/rest/api/3/resolution', 'POST'] as const
}

export function usePostRestApi3Resolution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['resolution']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['resolution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ResolutionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['resolution']['$post']> },
      ) => parseResponse(client.rest.api['3'].resolution.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3ResolutionDefaultKey() {
  return ['rest', '/rest/api/3/resolution/default', 'PUT'] as const
}

export function usePutRestApi3ResolutionDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['resolution']['default']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['resolution']['default']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ResolutionDefaultKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['resolution']['default']['$put']>
        },
      ) => parseResponse(client.rest.api['3'].resolution.default.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3ResolutionMoveKey() {
  return ['rest', '/rest/api/3/resolution/move', 'PUT'] as const
}

export function usePutRestApi3ResolutionMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['resolution']['move']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['resolution']['move']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ResolutionMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['resolution']['move']['$put']> },
      ) => parseResponse(client.rest.api['3'].resolution.move.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ResolutionSearchKey(
  args: InferRequestType<(typeof client.rest.api)['3']['resolution']['search']['$get']>,
) {
  return ['rest', '/rest/api/3/resolution/search', args] as const
}

export function useGetRestApi3ResolutionSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['resolution']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['resolution']['search']['$get']>>
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
        ? getGetRestApi3ResolutionSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['resolution']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].resolution.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ResolutionSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['resolution']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['resolution']['search']['$get']>>
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
        ? getGetRestApi3ResolutionSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['resolution']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].resolution.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ResolutionIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['resolution'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/resolution/:id', args] as const
}

export function useGetRestApi3ResolutionId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['resolution'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['resolution'][':id']['$get']>>
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
        ? getGetRestApi3ResolutionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['resolution'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].resolution[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ResolutionId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['resolution'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['resolution'][':id']['$get']>>
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
        ? getGetRestApi3ResolutionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['resolution'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].resolution[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3ResolutionIdKey() {
  return ['rest', '/rest/api/3/resolution/:id', 'PUT'] as const
}

export function usePutRestApi3ResolutionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['resolution'][':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['resolution'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ResolutionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['resolution'][':id']['$put']> },
      ) => parseResponse(client.rest.api['3'].resolution[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3ResolutionIdKey() {
  return ['rest', '/rest/api/3/resolution/:id', 'DELETE'] as const
}

export function useDeleteRestApi3ResolutionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['resolution'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['resolution'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3ResolutionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['resolution'][':id']['$delete']> },
      ) => parseResponse(client.rest.api['3'].resolution[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3RoleKey() {
  return ['rest', '/rest/api/3/role'] as const
}

export function useGetRestApi3Role<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['role']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestApi3RoleKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['role']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].role.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Role<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['role']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestApi3RoleKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['role']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].role.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3RoleKey() {
  return ['rest', '/rest/api/3/role', 'POST'] as const
}

export function usePostRestApi3Role<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['role']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['role']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3RoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['role']['$post']> },
      ) => parseResponse(client.rest.api['3'].role.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3RoleIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/role/:id', args] as const
}

export function useGetRestApi3RoleId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['role'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3RoleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['role'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].role[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3RoleId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['role'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3RoleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['role'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].role[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3RoleIdKey() {
  return ['rest', '/rest/api/3/role/:id', 'PUT'] as const
}

export function usePutRestApi3RoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['role'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['role'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3RoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['$put']> },
      ) => parseResponse(client.rest.api['3'].role[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3RoleIdKey() {
  return ['rest', '/rest/api/3/role/:id', 'POST'] as const
}

export function usePostRestApi3RoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['role'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['role'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3RoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['$post']> },
      ) => parseResponse(client.rest.api['3'].role[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3RoleIdKey() {
  return ['rest', '/rest/api/3/role/:id', 'DELETE'] as const
}

export function useDeleteRestApi3RoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['role'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['role'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3RoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['$delete']> },
      ) => parseResponse(client.rest.api['3'].role[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3RoleIdActorsKey(
  args: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['actors']['$get']>,
) {
  return ['rest', '/rest/api/3/role/:id/actors', args] as const
}

export function useGetRestApi3RoleIdActors<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['actors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['role'][':id']['actors']['$get']>>
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
        ? getGetRestApi3RoleIdActorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['role'][':id']['actors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].role[':id'].actors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3RoleIdActors<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['actors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['role'][':id']['actors']['$get']>>
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
        ? getGetRestApi3RoleIdActorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['role'][':id']['actors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].role[':id'].actors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3RoleIdActorsKey() {
  return ['rest', '/rest/api/3/role/:id/actors', 'POST'] as const
}

export function usePostRestApi3RoleIdActors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['role'][':id']['actors']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['role'][':id']['actors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3RoleIdActorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['actors']['$post']>
        },
      ) => parseResponse(client.rest.api['3'].role[':id'].actors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3RoleIdActorsKey() {
  return ['rest', '/rest/api/3/role/:id/actors', 'DELETE'] as const
}

export function useDeleteRestApi3RoleIdActors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['role'][':id']['actors']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['role'][':id']['actors']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3RoleIdActorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['role'][':id']['actors']['$delete']>
        },
      ) => parseResponse(client.rest.api['3'].role[':id'].actors.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ScreensKey(
  args: InferRequestType<(typeof client.rest.api)['3']['screens']['$get']>,
) {
  return ['rest', '/rest/api/3/screens', args] as const
}

export function useGetRestApi3Screens<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['screens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['screens']['$get']>>
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
        ? getGetRestApi3ScreensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['screens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].screens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Screens<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['screens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['screens']['$get']>>
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
        ? getGetRestApi3ScreensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['screens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].screens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3ScreensKey() {
  return ['rest', '/rest/api/3/screens', 'POST'] as const
}

export function usePostRestApi3Screens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['screens']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['screens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ScreensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['screens']['$post']> },
      ) => parseResponse(client.rest.api['3'].screens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3ScreensAddToDefaultFieldIdKey() {
  return ['rest', '/rest/api/3/screens/addToDefault/:fieldId', 'POST'] as const
}

export function usePostRestApi3ScreensAddToDefaultFieldId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['screens']['addToDefault'][':fieldId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['screens']['addToDefault'][':fieldId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ScreensAddToDefaultFieldIdKey()
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
            (typeof client.rest.api)['3']['screens']['addToDefault'][':fieldId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].screens.addToDefault[':fieldId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3ScreensScreenIdKey() {
  return ['rest', '/rest/api/3/screens/:screenId', 'PUT'] as const
}

export function usePutRestApi3ScreensScreenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['screens'][':screenId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['screens'][':screenId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ScreensScreenIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['screens'][':screenId']['$put']> },
      ) => parseResponse(client.rest.api['3'].screens[':screenId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3ScreensScreenIdKey() {
  return ['rest', '/rest/api/3/screens/:screenId', 'DELETE'] as const
}

export function useDeleteRestApi3ScreensScreenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['screens'][':screenId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['screens'][':screenId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3ScreensScreenIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['screens'][':screenId']['$delete']>
        },
      ) => parseResponse(client.rest.api['3'].screens[':screenId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ScreensScreenIdAvailableFieldsKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens'][':screenId']['availableFields']['$get']
  >,
) {
  return ['rest', '/rest/api/3/screens/:screenId/availableFields', args] as const
}

export function useGetRestApi3ScreensScreenIdAvailableFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens'][':screenId']['availableFields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['screens'][':screenId']['availableFields']['$get']
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
        ? getGetRestApi3ScreensScreenIdAvailableFieldsKey(args)
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
                (typeof client.rest.api)['3']['screens'][':screenId']['availableFields']['$get']
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
          client.rest.api['3'].screens[':screenId'].availableFields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ScreensScreenIdAvailableFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens'][':screenId']['availableFields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['screens'][':screenId']['availableFields']['$get']
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
        ? getGetRestApi3ScreensScreenIdAvailableFieldsKey(args)
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
                (typeof client.rest.api)['3']['screens'][':screenId']['availableFields']['$get']
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
          client.rest.api['3'].screens[':screenId'].availableFields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ScreensScreenIdTabsKey(
  args: InferRequestType<(typeof client.rest.api)['3']['screens'][':screenId']['tabs']['$get']>,
) {
  return ['rest', '/rest/api/3/screens/:screenId/tabs', args] as const
}

export function useGetRestApi3ScreensScreenIdTabs<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['screens'][':screenId']['tabs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['screens'][':screenId']['tabs']['$get']>
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
        ? getGetRestApi3ScreensScreenIdTabsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['screens'][':screenId']['tabs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].screens[':screenId'].tabs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ScreensScreenIdTabs<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['screens'][':screenId']['tabs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['screens'][':screenId']['tabs']['$get']>
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
        ? getGetRestApi3ScreensScreenIdTabsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['screens'][':screenId']['tabs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].screens[':screenId'].tabs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3ScreensScreenIdTabsKey() {
  return ['rest', '/rest/api/3/screens/:screenId/tabs', 'POST'] as const
}

export function usePostRestApi3ScreensScreenIdTabs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['screens'][':screenId']['tabs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['screens'][':screenId']['tabs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ScreensScreenIdTabsKey()
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
            (typeof client.rest.api)['3']['screens'][':screenId']['tabs']['$post']
          >
        },
      ) => parseResponse(client.rest.api['3'].screens[':screenId'].tabs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3ScreensScreenIdTabsTabIdKey() {
  return ['rest', '/rest/api/3/screens/:screenId/tabs/:tabId', 'PUT'] as const
}

export function usePutRestApi3ScreensScreenIdTabsTabId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ScreensScreenIdTabsTabIdKey()
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
            (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].screens[':screenId'].tabs[':tabId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3ScreensScreenIdTabsTabIdKey() {
  return ['rest', '/rest/api/3/screens/:screenId/tabs/:tabId', 'DELETE'] as const
}

export function useDeleteRestApi3ScreensScreenIdTabsTabId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3ScreensScreenIdTabsTabIdKey()
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
            (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].screens[':screenId'].tabs[':tabId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ScreensScreenIdTabsTabIdFieldsKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields']['$get']
  >,
) {
  return ['rest', '/rest/api/3/screens/:screenId/tabs/:tabId/fields', args] as const
}

export function useGetRestApi3ScreensScreenIdTabsTabIdFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields']['$get']
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
        ? getGetRestApi3ScreensScreenIdTabsTabIdFieldsKey(args)
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
                (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields']['$get']
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
          client.rest.api['3'].screens[':screenId'].tabs[':tabId'].fields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ScreensScreenIdTabsTabIdFields<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields']['$get']
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
        ? getGetRestApi3ScreensScreenIdTabsTabIdFieldsKey(args)
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
                (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields']['$get']
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
          client.rest.api['3'].screens[':screenId'].tabs[':tabId'].fields.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3ScreensScreenIdTabsTabIdFieldsKey() {
  return ['rest', '/rest/api/3/screens/:screenId/tabs/:tabId/fields', 'POST'] as const
}

export function usePostRestApi3ScreensScreenIdTabsTabIdFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ScreensScreenIdTabsTabIdFieldsKey()
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
            (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].screens[':screenId'].tabs[':tabId'].fields.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3ScreensScreenIdTabsTabIdFieldsIdKey() {
  return ['rest', '/rest/api/3/screens/:screenId/tabs/:tabId/fields/:id', 'DELETE'] as const
}

export function useDeleteRestApi3ScreensScreenIdTabsTabIdFieldsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3ScreensScreenIdTabsTabIdFieldsIdKey()
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
            (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].screens[':screenId'].tabs[':tabId'].fields[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3ScreensScreenIdTabsTabIdFieldsIdMoveKey() {
  return ['rest', '/rest/api/3/screens/:screenId/tabs/:tabId/fields/:id/move', 'POST'] as const
}

export function usePostRestApi3ScreensScreenIdTabsTabIdFieldsIdMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields'][':id']['move']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields'][':id']['move']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ScreensScreenIdTabsTabIdFieldsIdMoveKey()
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
            (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['fields'][':id']['move']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].screens[':screenId'].tabs[':tabId'].fields[':id'].move.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3ScreensScreenIdTabsTabIdMovePosKey() {
  return ['rest', '/rest/api/3/screens/:screenId/tabs/:tabId/move/:pos', 'POST'] as const
}

export function usePostRestApi3ScreensScreenIdTabsTabIdMovePos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['move'][':pos']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['move'][':pos']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ScreensScreenIdTabsTabIdMovePosKey()
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
            (typeof client.rest.api)['3']['screens'][':screenId']['tabs'][':tabId']['move'][':pos']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].screens[':screenId'].tabs[':tabId'].move[':pos'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3ScreenschemeKey(
  args: InferRequestType<(typeof client.rest.api)['3']['screenscheme']['$get']>,
) {
  return ['rest', '/rest/api/3/screenscheme', args] as const
}

export function useGetRestApi3Screenscheme<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['screenscheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['screenscheme']['$get']>>
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
        ? getGetRestApi3ScreenschemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['screenscheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].screenscheme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Screenscheme<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['screenscheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['screenscheme']['$get']>>
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
        ? getGetRestApi3ScreenschemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['screenscheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].screenscheme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3ScreenschemeKey() {
  return ['rest', '/rest/api/3/screenscheme', 'POST'] as const
}

export function usePostRestApi3Screenscheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['screenscheme']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['screenscheme']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3ScreenschemeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['screenscheme']['$post']> },
      ) => parseResponse(client.rest.api['3'].screenscheme.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3ScreenschemeScreenSchemeIdKey() {
  return ['rest', '/rest/api/3/screenscheme/:screenSchemeId', 'PUT'] as const
}

export function usePutRestApi3ScreenschemeScreenSchemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['screenscheme'][':screenSchemeId']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['screenscheme'][':screenSchemeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3ScreenschemeScreenSchemeIdKey()
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
            (typeof client.rest.api)['3']['screenscheme'][':screenSchemeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].screenscheme[':screenSchemeId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3ScreenschemeScreenSchemeIdKey() {
  return ['rest', '/rest/api/3/screenscheme/:screenSchemeId', 'DELETE'] as const
}

export function useDeleteRestApi3ScreenschemeScreenSchemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['screenscheme'][':screenSchemeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['screenscheme'][':screenSchemeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3ScreenschemeScreenSchemeIdKey()
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
            (typeof client.rest.api)['3']['screenscheme'][':screenSchemeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].screenscheme[':screenSchemeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3SearchKey(
  args: InferRequestType<(typeof client.rest.api)['3']['search']['$get']>,
) {
  return ['rest', '/rest/api/3/search', args] as const
}

export function useGetRestApi3Search<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['search']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3SearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['search']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Search<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['search']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3SearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['search']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3SearchKey() {
  return ['rest', '/rest/api/3/search', 'POST'] as const
}

export function usePostRestApi3Search<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['search']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3SearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['search']['$post']> },
      ) => parseResponse(client.rest.api['3'].search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3SecuritylevelIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['securitylevel'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/securitylevel/:id', args] as const
}

export function useGetRestApi3SecuritylevelId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['securitylevel'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['securitylevel'][':id']['$get']>>
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
        ? getGetRestApi3SecuritylevelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['securitylevel'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].securitylevel[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3SecuritylevelId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['securitylevel'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['securitylevel'][':id']['$get']>>
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
        ? getGetRestApi3SecuritylevelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['securitylevel'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].securitylevel[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3ServerInfoKey() {
  return ['rest', '/rest/api/3/serverInfo'] as const
}

export function useGetRestApi3ServerInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['serverInfo']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3ServerInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['serverInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].serverInfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3ServerInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['serverInfo']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3ServerInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['serverInfo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].serverInfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3SettingsColumnsKey() {
  return ['rest', '/rest/api/3/settings/columns'] as const
}

export function useGetRestApi3SettingsColumns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['settings']['columns']['$get']>>
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
        ? getGetRestApi3SettingsColumnsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['settings']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].settings.columns.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3SettingsColumns<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['settings']['columns']['$get']>>
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
        ? getGetRestApi3SettingsColumnsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['settings']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].settings.columns.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3SettingsColumnsKey() {
  return ['rest', '/rest/api/3/settings/columns', 'PUT'] as const
}

export function usePutRestApi3SettingsColumns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['settings']['columns']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['settings']['columns']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3SettingsColumnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['settings']['columns']['$put']> },
      ) => parseResponse(client.rest.api['3'].settings.columns.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3StatusKey() {
  return ['rest', '/rest/api/3/status'] as const
}

export function useGetRestApi3Status<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['status']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestApi3StatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['status']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Status<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['status']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRestApi3StatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['status']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3StatusIdOrNameKey(
  args: InferRequestType<(typeof client.rest.api)['3']['status'][':idOrName']['$get']>,
) {
  return ['rest', '/rest/api/3/status/:idOrName', args] as const
}

export function useGetRestApi3StatusIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['status'][':idOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['status'][':idOrName']['$get']>>
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
        ? getGetRestApi3StatusIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['status'][':idOrName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].status[':idOrName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3StatusIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['status'][':idOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['status'][':idOrName']['$get']>>
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
        ? getGetRestApi3StatusIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['status'][':idOrName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].status[':idOrName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3StatuscategoryKey() {
  return ['rest', '/rest/api/3/statuscategory'] as const
}

export function useGetRestApi3Statuscategory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['statuscategory']['$get']>>
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
        ? getGetRestApi3StatuscategoryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuscategory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].statuscategory.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Statuscategory<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['statuscategory']['$get']>>
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
        ? getGetRestApi3StatuscategoryKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuscategory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].statuscategory.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3StatuscategoryIdOrKeyKey(
  args: InferRequestType<(typeof client.rest.api)['3']['statuscategory'][':idOrKey']['$get']>,
) {
  return ['rest', '/rest/api/3/statuscategory/:idOrKey', args] as const
}

export function useGetRestApi3StatuscategoryIdOrKey<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['statuscategory'][':idOrKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuscategory'][':idOrKey']['$get']>>
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
        ? getGetRestApi3StatuscategoryIdOrKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuscategory'][':idOrKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].statuscategory[':idOrKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3StatuscategoryIdOrKey<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['statuscategory'][':idOrKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuscategory'][':idOrKey']['$get']>>
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
        ? getGetRestApi3StatuscategoryIdOrKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuscategory'][':idOrKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].statuscategory[':idOrKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3StatusesKey(
  args: InferRequestType<(typeof client.rest.api)['3']['statuses']['$get']>,
) {
  return ['rest', '/rest/api/3/statuses', args] as const
}

export function useGetRestApi3Statuses<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuses']['$get']>>
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
        ? getGetRestApi3StatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Statuses<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuses']['$get']>>
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
        ? getGetRestApi3StatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3StatusesKey() {
  return ['rest', '/rest/api/3/statuses', 'PUT'] as const
}

export function usePutRestApi3Statuses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuses']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['statuses']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3StatusesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['statuses']['$put']> },
      ) => parseResponse(client.rest.api['3'].statuses.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3StatusesKey() {
  return ['rest', '/rest/api/3/statuses', 'POST'] as const
}

export function usePostRestApi3Statuses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['statuses']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['statuses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3StatusesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['statuses']['$post']> },
      ) => parseResponse(client.rest.api['3'].statuses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3StatusesKey() {
  return ['rest', '/rest/api/3/statuses', 'DELETE'] as const
}

export function useDeleteRestApi3Statuses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuses']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['statuses']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3StatusesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['statuses']['$delete']> },
      ) => parseResponse(client.rest.api['3'].statuses.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3StatusesSearchKey(
  args: InferRequestType<(typeof client.rest.api)['3']['statuses']['search']['$get']>,
) {
  return ['rest', '/rest/api/3/statuses/search', args] as const
}

export function useGetRestApi3StatusesSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['statuses']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuses']['search']['$get']>>
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
        ? getGetRestApi3StatusesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuses']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].statuses.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3StatusesSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['statuses']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuses']['search']['$get']>>
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
        ? getGetRestApi3StatusesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['statuses']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].statuses.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3TaskTaskIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['task'][':taskId']['$get']>,
) {
  return ['rest', '/rest/api/3/task/:taskId', args] as const
}

export function useGetRestApi3TaskTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['task'][':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['task'][':taskId']['$get']>>
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
        ? getGetRestApi3TaskTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['task'][':taskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].task[':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3TaskTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['task'][':taskId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['task'][':taskId']['$get']>>
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
        ? getGetRestApi3TaskTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['task'][':taskId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].task[':taskId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3TaskTaskIdCancelKey() {
  return ['rest', '/rest/api/3/task/:taskId/cancel', 'POST'] as const
}

export function usePostRestApi3TaskTaskIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['task'][':taskId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['task'][':taskId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3TaskTaskIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['task'][':taskId']['cancel']['$post']>
        },
      ) => parseResponse(client.rest.api['3'].task[':taskId'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3UiModificationsKey(
  args: InferRequestType<(typeof client.rest.api)['3']['uiModifications']['$get']>,
) {
  return ['rest', '/rest/api/3/uiModifications', args] as const
}

export function useGetRestApi3UiModifications<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['uiModifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['uiModifications']['$get']>>
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
        ? getGetRestApi3UiModificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['uiModifications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].uiModifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UiModifications<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['uiModifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['uiModifications']['$get']>>
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
        ? getGetRestApi3UiModificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['uiModifications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].uiModifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3UiModificationsKey() {
  return ['rest', '/rest/api/3/uiModifications', 'POST'] as const
}

export function usePostRestApi3UiModifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['uiModifications']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['uiModifications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3UiModificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['uiModifications']['$post']> },
      ) => parseResponse(client.rest.api['3'].uiModifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3UiModificationsUiModificationIdKey() {
  return ['rest', '/rest/api/3/uiModifications/:uiModificationId', 'PUT'] as const
}

export function usePutRestApi3UiModificationsUiModificationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['uiModifications'][':uiModificationId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['uiModifications'][':uiModificationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3UiModificationsUiModificationIdKey()
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
            (typeof client.rest.api)['3']['uiModifications'][':uiModificationId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].uiModifications[':uiModificationId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3UiModificationsUiModificationIdKey() {
  return ['rest', '/rest/api/3/uiModifications/:uiModificationId', 'DELETE'] as const
}

export function useDeleteRestApi3UiModificationsUiModificationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['uiModifications'][':uiModificationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['uiModifications'][':uiModificationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3UiModificationsUiModificationIdKey()
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
            (typeof client.rest.api)['3']['uiModifications'][':uiModificationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].uiModifications[':uiModificationId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3UniversalAvatarTypeTypeOwnerEntityIdKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':entityId']['$get']
  >,
) {
  return ['rest', '/rest/api/3/universal_avatar/type/:type/owner/:entityId', args] as const
}

export function useGetRestApi3UniversalAvatarTypeTypeOwnerEntityId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':entityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':entityId']['$get']
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
        ? getGetRestApi3UniversalAvatarTypeTypeOwnerEntityIdKey(args)
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
                (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':entityId']['$get']
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
          client.rest.api['3'].universal_avatar.type[':type'].owner[':entityId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UniversalAvatarTypeTypeOwnerEntityId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':entityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':entityId']['$get']
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
        ? getGetRestApi3UniversalAvatarTypeTypeOwnerEntityIdKey(args)
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
                (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':entityId']['$get']
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
          client.rest.api['3'].universal_avatar.type[':type'].owner[':entityId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3UniversalAvatarTypeTypeOwnerEntityIdKey() {
  return ['rest', '/rest/api/3/universal_avatar/type/:type/owner/:entityId', 'POST'] as const
}

export function usePostRestApi3UniversalAvatarTypeTypeOwnerEntityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':entityId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':entityId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3UniversalAvatarTypeTypeOwnerEntityIdKey()
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
            (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':entityId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].universal_avatar.type[':type'].owner[':entityId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdKey() {
  return [
    'rest',
    '/rest/api/3/universal_avatar/type/:type/owner/:owningObjectId/avatar/:id',
    'DELETE',
  ] as const
}

export function useDeleteRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':owningObjectId']['avatar'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':owningObjectId']['avatar'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdKey()
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
            (typeof client.rest.api)['3']['universal_avatar']['type'][':type']['owner'][':owningObjectId']['avatar'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].universal_avatar.type[':type'].owner[':owningObjectId'].avatar[
            ':id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3UniversalAvatarViewTypeTypeKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['$get']
  >,
) {
  return ['rest', '/rest/api/3/universal_avatar/view/type/:type', args] as const
}

export function useGetRestApi3UniversalAvatarViewTypeType<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['$get']
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
        ? getGetRestApi3UniversalAvatarViewTypeTypeKey(args)
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
                (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['$get']
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
          client.rest.api['3'].universal_avatar.view.type[':type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UniversalAvatarViewTypeType<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['$get']
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
        ? getGetRestApi3UniversalAvatarViewTypeTypeKey(args)
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
                (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['$get']
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
          client.rest.api['3'].universal_avatar.view.type[':type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UniversalAvatarViewTypeTypeAvatarIdKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['avatar'][':id']['$get']
  >,
) {
  return ['rest', '/rest/api/3/universal_avatar/view/type/:type/avatar/:id', args] as const
}

export function useGetRestApi3UniversalAvatarViewTypeTypeAvatarId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['avatar'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['avatar'][':id']['$get']
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
        ? getGetRestApi3UniversalAvatarViewTypeTypeAvatarIdKey(args)
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
                (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['avatar'][':id']['$get']
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
          client.rest.api['3'].universal_avatar.view.type[':type'].avatar[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UniversalAvatarViewTypeTypeAvatarId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['avatar'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['avatar'][':id']['$get']
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
        ? getGetRestApi3UniversalAvatarViewTypeTypeAvatarIdKey(args)
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
                (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['avatar'][':id']['$get']
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
          client.rest.api['3'].universal_avatar.view.type[':type'].avatar[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UniversalAvatarViewTypeTypeOwnerEntityIdKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['owner'][':entityId']['$get']
  >,
) {
  return ['rest', '/rest/api/3/universal_avatar/view/type/:type/owner/:entityId', args] as const
}

export function useGetRestApi3UniversalAvatarViewTypeTypeOwnerEntityId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['owner'][':entityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['owner'][':entityId']['$get']
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
        ? getGetRestApi3UniversalAvatarViewTypeTypeOwnerEntityIdKey(args)
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
                (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['owner'][':entityId']['$get']
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
          client.rest.api['3'].universal_avatar.view.type[':type'].owner[':entityId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UniversalAvatarViewTypeTypeOwnerEntityId<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['owner'][':entityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['owner'][':entityId']['$get']
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
        ? getGetRestApi3UniversalAvatarViewTypeTypeOwnerEntityIdKey(args)
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
                (typeof client.rest.api)['3']['universal_avatar']['view']['type'][':type']['owner'][':entityId']['$get']
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
          client.rest.api['3'].universal_avatar.view.type[':type'].owner[':entityId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UserKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['$get']>,
) {
  return ['rest', '/rest/api/3/user', args] as const
}

export function useGetRestApi3User<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['user']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3UserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['user']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3User<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['user']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3UserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['user']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3UserKey() {
  return ['rest', '/rest/api/3/user', 'POST'] as const
}

export function usePostRestApi3User<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['user']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3UserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['user']['$post']> },
      ) => parseResponse(client.rest.api['3'].user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3UserKey() {
  return ['rest', '/rest/api/3/user', 'DELETE'] as const
}

export function useDeleteRestApi3User<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['user']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3UserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['user']['$delete']> },
      ) => parseResponse(client.rest.api['3'].user.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3UserAssignableMultiProjectSearchKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['user']['assignable']['multiProjectSearch']['$get']
  >,
) {
  return ['rest', '/rest/api/3/user/assignable/multiProjectSearch', args] as const
}

export function useGetRestApi3UserAssignableMultiProjectSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['user']['assignable']['multiProjectSearch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['user']['assignable']['multiProjectSearch']['$get']
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
        ? getGetRestApi3UserAssignableMultiProjectSearchKey(args)
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
                (typeof client.rest.api)['3']['user']['assignable']['multiProjectSearch']['$get']
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
          client.rest.api['3'].user.assignable.multiProjectSearch.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserAssignableMultiProjectSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['user']['assignable']['multiProjectSearch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['user']['assignable']['multiProjectSearch']['$get']
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
        ? getGetRestApi3UserAssignableMultiProjectSearchKey(args)
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
                (typeof client.rest.api)['3']['user']['assignable']['multiProjectSearch']['$get']
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
          client.rest.api['3'].user.assignable.multiProjectSearch.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UserAssignableSearchKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['assignable']['search']['$get']>,
) {
  return ['rest', '/rest/api/3/user/assignable/search', args] as const
}

export function useGetRestApi3UserAssignableSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['assignable']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['assignable']['search']['$get']>
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
        ? getGetRestApi3UserAssignableSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['assignable']['search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].user.assignable.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserAssignableSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['assignable']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['assignable']['search']['$get']>
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
        ? getGetRestApi3UserAssignableSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['assignable']['search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].user.assignable.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UserBulkKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['bulk']['$get']>,
) {
  return ['rest', '/rest/api/3/user/bulk', args] as const
}

export function useGetRestApi3UserBulk<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['bulk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['bulk']['$get']>>
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
        ? getGetRestApi3UserBulkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['bulk']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.bulk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserBulk<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['bulk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['bulk']['$get']>>
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
        ? getGetRestApi3UserBulkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['bulk']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.bulk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UserBulkMigrationKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['bulk']['migration']['$get']>,
) {
  return ['rest', '/rest/api/3/user/bulk/migration', args] as const
}

export function useGetRestApi3UserBulkMigration<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['bulk']['migration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['bulk']['migration']['$get']>>
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
        ? getGetRestApi3UserBulkMigrationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['bulk']['migration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.bulk.migration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserBulkMigration<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['bulk']['migration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['bulk']['migration']['$get']>>
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
        ? getGetRestApi3UserBulkMigrationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['bulk']['migration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.bulk.migration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UserColumnsKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['columns']['$get']>,
) {
  return ['rest', '/rest/api/3/user/columns', args] as const
}

export function useGetRestApi3UserColumns<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['columns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['columns']['$get']>>
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
        ? getGetRestApi3UserColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.columns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserColumns<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['columns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['columns']['$get']>>
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
        ? getGetRestApi3UserColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.columns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3UserColumnsKey() {
  return ['rest', '/rest/api/3/user/columns', 'PUT'] as const
}

export function usePutRestApi3UserColumns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['user']['columns']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['user']['columns']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3UserColumnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['user']['columns']['$put']> },
      ) => parseResponse(client.rest.api['3'].user.columns.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3UserColumnsKey() {
  return ['rest', '/rest/api/3/user/columns', 'DELETE'] as const
}

export function useDeleteRestApi3UserColumns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['columns']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['user']['columns']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3UserColumnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['user']['columns']['$delete']> },
      ) => parseResponse(client.rest.api['3'].user.columns.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3UserEmailKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['email']['$get']>,
) {
  return ['rest', '/rest/api/3/user/email', args] as const
}

export function useGetRestApi3UserEmail<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['email']['$get']>>
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
        ? getGetRestApi3UserEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserEmail<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['email']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['email']['$get']>>
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
        ? getGetRestApi3UserEmailKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['email']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.email.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UserEmailBulkKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['email']['bulk']['$get']>,
) {
  return ['rest', '/rest/api/3/user/email/bulk', args] as const
}

export function useGetRestApi3UserEmailBulk<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['email']['bulk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['email']['bulk']['$get']>>
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
        ? getGetRestApi3UserEmailBulkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['email']['bulk']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.email.bulk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserEmailBulk<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['email']['bulk']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['email']['bulk']['$get']>>
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
        ? getGetRestApi3UserEmailBulkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['email']['bulk']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.email.bulk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UserGroupsKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['groups']['$get']>,
) {
  return ['rest', '/rest/api/3/user/groups', args] as const
}

export function useGetRestApi3UserGroups<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['groups']['$get']>>
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
        ? getGetRestApi3UserGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserGroups<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['groups']['$get']>>
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
        ? getGetRestApi3UserGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UserPermissionSearchKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['permission']['search']['$get']>,
) {
  return ['rest', '/rest/api/3/user/permission/search', args] as const
}

export function useGetRestApi3UserPermissionSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['permission']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['permission']['search']['$get']>
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
        ? getGetRestApi3UserPermissionSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['permission']['search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].user.permission.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserPermissionSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['permission']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['permission']['search']['$get']>
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
        ? getGetRestApi3UserPermissionSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['permission']['search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].user.permission.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UserPickerKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['picker']['$get']>,
) {
  return ['rest', '/rest/api/3/user/picker', args] as const
}

export function useGetRestApi3UserPicker<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['picker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['picker']['$get']>>
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
        ? getGetRestApi3UserPickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['picker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.picker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserPicker<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['picker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['picker']['$get']>>
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
        ? getGetRestApi3UserPickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['picker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.picker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UserPropertiesKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['properties']['$get']>,
) {
  return ['rest', '/rest/api/3/user/properties', args] as const
}

export function useGetRestApi3UserProperties<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['properties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['properties']['$get']>>
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
        ? getGetRestApi3UserPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['properties']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.properties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserProperties<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['properties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['properties']['$get']>>
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
        ? getGetRestApi3UserPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['properties']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.properties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UserPropertiesPropertyKeyKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$get']
  >,
) {
  return ['rest', '/rest/api/3/user/properties/:propertyKey', args] as const
}

export function useGetRestApi3UserPropertiesPropertyKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$get']
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
        ? getGetRestApi3UserPropertiesPropertyKeyKey(args)
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
                (typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$get']
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
          client.rest.api['3'].user.properties[':propertyKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserPropertiesPropertyKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$get']
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
        ? getGetRestApi3UserPropertiesPropertyKeyKey(args)
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
                (typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$get']
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
          client.rest.api['3'].user.properties[':propertyKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3UserPropertiesPropertyKeyKey() {
  return ['rest', '/rest/api/3/user/properties/:propertyKey', 'PUT'] as const
}

export function usePutRestApi3UserPropertiesPropertyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3UserPropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].user.properties[':propertyKey'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3UserPropertiesPropertyKeyKey() {
  return ['rest', '/rest/api/3/user/properties/:propertyKey', 'DELETE'] as const
}

export function useDeleteRestApi3UserPropertiesPropertyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3UserPropertiesPropertyKeyKey()
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
            (typeof client.rest.api)['3']['user']['properties'][':propertyKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].user.properties[':propertyKey'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3UserSearchKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['search']['$get']>,
) {
  return ['rest', '/rest/api/3/user/search', args] as const
}

export function useGetRestApi3UserSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['search']['$get']>>
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
        ? getGetRestApi3UserSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['search']['$get']>>
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
        ? getGetRestApi3UserSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UserSearchQueryKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['search']['query']['$get']>,
) {
  return ['rest', '/rest/api/3/user/search/query', args] as const
}

export function useGetRestApi3UserSearchQuery<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['search']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['search']['query']['$get']>>
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
        ? getGetRestApi3UserSearchQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['search']['query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.search.query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserSearchQuery<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['search']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['search']['query']['$get']>>
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
        ? getGetRestApi3UserSearchQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['user']['search']['query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].user.search.query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UserSearchQueryKeyKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['search']['query']['key']['$get']>,
) {
  return ['rest', '/rest/api/3/user/search/query/key', args] as const
}

export function useGetRestApi3UserSearchQueryKey<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['search']['query']['key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['search']['query']['key']['$get']>
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
        ? getGetRestApi3UserSearchQueryKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['search']['query']['key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].user.search.query.key.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserSearchQueryKey<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['search']['query']['key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['search']['query']['key']['$get']>
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
        ? getGetRestApi3UserSearchQueryKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['search']['query']['key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].user.search.query.key.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UserViewissueSearchKey(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['viewissue']['search']['$get']>,
) {
  return ['rest', '/rest/api/3/user/viewissue/search', args] as const
}

export function useGetRestApi3UserViewissueSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['viewissue']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['viewissue']['search']['$get']>
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
        ? getGetRestApi3UserViewissueSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['viewissue']['search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].user.viewissue.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UserViewissueSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['user']['viewissue']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['viewissue']['search']['$get']>
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
        ? getGetRestApi3UserViewissueSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['user']['viewissue']['search']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].user.viewissue.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UsersKey(
  args: InferRequestType<(typeof client.rest.api)['3']['users']['$get']>,
) {
  return ['rest', '/rest/api/3/users', args] as const
}

export function useGetRestApi3Users<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['users']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['users']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Users<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['users']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRestApi3UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['users']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3UsersSearchKey(
  args: InferRequestType<(typeof client.rest.api)['3']['users']['search']['$get']>,
) {
  return ['rest', '/rest/api/3/users/search', args] as const
}

export function useGetRestApi3UsersSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['users']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['users']['search']['$get']>>
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
        ? getGetRestApi3UsersSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['users']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].users.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3UsersSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['users']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['users']['search']['$get']>>
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
        ? getGetRestApi3UsersSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['users']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].users.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3VersionKey() {
  return ['rest', '/rest/api/3/version', 'POST'] as const
}

export function usePostRestApi3Version<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['version']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['version']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3VersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['version']['$post']> },
      ) => parseResponse(client.rest.api['3'].version.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3VersionIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['version'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/version/:id', args] as const
}

export function useGetRestApi3VersionId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['version'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['version'][':id']['$get']>>
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
        ? getGetRestApi3VersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['version'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].version[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3VersionId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['version'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['version'][':id']['$get']>>
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
        ? getGetRestApi3VersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['version'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].version[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3VersionIdKey() {
  return ['rest', '/rest/api/3/version/:id', 'PUT'] as const
}

export function usePutRestApi3VersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['version'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['version'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3VersionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['version'][':id']['$put']> },
      ) => parseResponse(client.rest.api['3'].version[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3VersionIdKey() {
  return ['rest', '/rest/api/3/version/:id', 'DELETE'] as const
}

export function useDeleteRestApi3VersionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['version'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['version'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3VersionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['version'][':id']['$delete']> },
      ) => parseResponse(client.rest.api['3'].version[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3VersionIdMergetoMoveIssuesToKey() {
  return ['rest', '/rest/api/3/version/:id/mergeto/:moveIssuesTo', 'PUT'] as const
}

export function usePutRestApi3VersionIdMergetoMoveIssuesTo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['version'][':id']['mergeto'][':moveIssuesTo']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['version'][':id']['mergeto'][':moveIssuesTo']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3VersionIdMergetoMoveIssuesToKey()
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
            (typeof client.rest.api)['3']['version'][':id']['mergeto'][':moveIssuesTo']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].version[':id'].mergeto[':moveIssuesTo'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3VersionIdMoveKey() {
  return ['rest', '/rest/api/3/version/:id/move', 'POST'] as const
}

export function usePostRestApi3VersionIdMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['version'][':id']['move']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['version'][':id']['move']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3VersionIdMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['version'][':id']['move']['$post']>
        },
      ) => parseResponse(client.rest.api['3'].version[':id'].move.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3VersionIdRelatedIssueCountsKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['version'][':id']['relatedIssueCounts']['$get']
  >,
) {
  return ['rest', '/rest/api/3/version/:id/relatedIssueCounts', args] as const
}

export function useGetRestApi3VersionIdRelatedIssueCounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['version'][':id']['relatedIssueCounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['version'][':id']['relatedIssueCounts']['$get']
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
        ? getGetRestApi3VersionIdRelatedIssueCountsKey(args)
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
                (typeof client.rest.api)['3']['version'][':id']['relatedIssueCounts']['$get']
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
          client.rest.api['3'].version[':id'].relatedIssueCounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3VersionIdRelatedIssueCounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['version'][':id']['relatedIssueCounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['version'][':id']['relatedIssueCounts']['$get']
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
        ? getGetRestApi3VersionIdRelatedIssueCountsKey(args)
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
                (typeof client.rest.api)['3']['version'][':id']['relatedIssueCounts']['$get']
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
          client.rest.api['3'].version[':id'].relatedIssueCounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3VersionIdRemoveAndSwapKey() {
  return ['rest', '/rest/api/3/version/:id/removeAndSwap', 'POST'] as const
}

export function usePostRestApi3VersionIdRemoveAndSwap<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['version'][':id']['removeAndSwap']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['version'][':id']['removeAndSwap']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3VersionIdRemoveAndSwapKey()
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
            (typeof client.rest.api)['3']['version'][':id']['removeAndSwap']['$post']
          >
        },
      ) =>
        parseResponse(client.rest.api['3'].version[':id'].removeAndSwap.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3VersionIdUnresolvedIssueCountKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['version'][':id']['unresolvedIssueCount']['$get']
  >,
) {
  return ['rest', '/rest/api/3/version/:id/unresolvedIssueCount', args] as const
}

export function useGetRestApi3VersionIdUnresolvedIssueCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['version'][':id']['unresolvedIssueCount']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['version'][':id']['unresolvedIssueCount']['$get']
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
        ? getGetRestApi3VersionIdUnresolvedIssueCountKey(args)
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
                (typeof client.rest.api)['3']['version'][':id']['unresolvedIssueCount']['$get']
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
          client.rest.api['3'].version[':id'].unresolvedIssueCount.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3VersionIdUnresolvedIssueCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['version'][':id']['unresolvedIssueCount']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['version'][':id']['unresolvedIssueCount']['$get']
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
        ? getGetRestApi3VersionIdUnresolvedIssueCountKey(args)
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
                (typeof client.rest.api)['3']['version'][':id']['unresolvedIssueCount']['$get']
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
          client.rest.api['3'].version[':id'].unresolvedIssueCount.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3WebhookKey(
  args: InferRequestType<(typeof client.rest.api)['3']['webhook']['$get']>,
) {
  return ['rest', '/rest/api/3/webhook', args] as const
}

export function useGetRestApi3Webhook<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['webhook']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['webhook']['$get']>>
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
        ? getGetRestApi3WebhookKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['webhook']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].webhook.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Webhook<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['webhook']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['webhook']['$get']>>
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
        ? getGetRestApi3WebhookKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['webhook']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].webhook.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3WebhookKey() {
  return ['rest', '/rest/api/3/webhook', 'POST'] as const
}

export function usePostRestApi3Webhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rest.api)['3']['webhook']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['webhook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3WebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['webhook']['$post']> },
      ) => parseResponse(client.rest.api['3'].webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3WebhookKey() {
  return ['rest', '/rest/api/3/webhook', 'DELETE'] as const
}

export function useDeleteRestApi3Webhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['webhook']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['webhook']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3WebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['webhook']['$delete']> },
      ) => parseResponse(client.rest.api['3'].webhook.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WebhookFailedKey(
  args: InferRequestType<(typeof client.rest.api)['3']['webhook']['failed']['$get']>,
) {
  return ['rest', '/rest/api/3/webhook/failed', args] as const
}

export function useGetRestApi3WebhookFailed<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['webhook']['failed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['webhook']['failed']['$get']>>
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
        ? getGetRestApi3WebhookFailedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['webhook']['failed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].webhook.failed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WebhookFailed<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['webhook']['failed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['webhook']['failed']['$get']>>
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
        ? getGetRestApi3WebhookFailedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['webhook']['failed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].webhook.failed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3WebhookRefreshKey() {
  return ['rest', '/rest/api/3/webhook/refresh', 'PUT'] as const
}

export function usePutRestApi3WebhookRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['webhook']['refresh']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['webhook']['refresh']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3WebhookRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['webhook']['refresh']['$put']> },
      ) => parseResponse(client.rest.api['3'].webhook.refresh.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorkflowKey(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow']['$get']>,
) {
  return ['rest', '/rest/api/3/workflow', args] as const
}

export function useGetRestApi3Workflow<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflow']['$get']>>
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
        ? getGetRestApi3WorkflowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflow']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].workflow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Workflow<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflow']['$get']>>
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
        ? getGetRestApi3WorkflowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflow']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].workflow.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3WorkflowKey() {
  return ['rest', '/rest/api/3/workflow', 'POST'] as const
}

export function usePostRestApi3Workflow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['workflow']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3WorkflowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rest.api)['3']['workflow']['$post']> },
      ) => parseResponse(client.rest.api['3'].workflow.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorkflowRuleConfigKey(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow']['rule']['config']['$get']>,
) {
  return ['rest', '/rest/api/3/workflow/rule/config', args] as const
}

export function useGetRestApi3WorkflowRuleConfig<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow']['rule']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflow']['rule']['config']['$get']>>
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
        ? getGetRestApi3WorkflowRuleConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflow']['rule']['config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].workflow.rule.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WorkflowRuleConfig<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow']['rule']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflow']['rule']['config']['$get']>>
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
        ? getGetRestApi3WorkflowRuleConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflow']['rule']['config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].workflow.rule.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3WorkflowRuleConfigKey() {
  return ['rest', '/rest/api/3/workflow/rule/config', 'PUT'] as const
}

export function usePutRestApi3WorkflowRuleConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['workflow']['rule']['config']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflow']['rule']['config']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3WorkflowRuleConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['workflow']['rule']['config']['$put']>
        },
      ) => parseResponse(client.rest.api['3'].workflow.rule.config.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestApi3WorkflowRuleConfigDeleteKey() {
  return ['rest', '/rest/api/3/workflow/rule/config/delete', 'PUT'] as const
}

export function usePutRestApi3WorkflowRuleConfigDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['workflow']['rule']['config']['delete']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflow']['rule']['config']['delete']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3WorkflowRuleConfigDeleteKey()
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
            (typeof client.rest.api)['3']['workflow']['rule']['config']['delete']['$put']
          >
        },
      ) => parseResponse(client.rest.api['3'].workflow.rule.config.delete.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorkflowSearchKey(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow']['search']['$get']>,
) {
  return ['rest', '/rest/api/3/workflow/search', args] as const
}

export function useGetRestApi3WorkflowSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflow']['search']['$get']>>
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
        ? getGetRestApi3WorkflowSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflow']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].workflow.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WorkflowSearch<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflow']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflow']['search']['$get']>>
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
        ? getGetRestApi3WorkflowSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflow']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].workflow.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestApi3WorkflowTransitionsTransitionIdPropertiesKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$get']
  >,
) {
  return ['rest', '/rest/api/3/workflow/transitions/:transitionId/properties', args] as const
}

export function useGetRestApi3WorkflowTransitionsTransitionIdProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$get']
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
        ? getGetRestApi3WorkflowTransitionsTransitionIdPropertiesKey(args)
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
                (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$get']
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
          client.rest.api['3'].workflow.transitions[':transitionId'].properties.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WorkflowTransitionsTransitionIdProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$get']
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
        ? getGetRestApi3WorkflowTransitionsTransitionIdPropertiesKey(args)
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
                (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$get']
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
          client.rest.api['3'].workflow.transitions[':transitionId'].properties.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3WorkflowTransitionsTransitionIdPropertiesKey() {
  return ['rest', '/rest/api/3/workflow/transitions/:transitionId/properties', 'PUT'] as const
}

export function usePutRestApi3WorkflowTransitionsTransitionIdProperties<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3WorkflowTransitionsTransitionIdPropertiesKey()
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
            (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflow.transitions[':transitionId'].properties.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3WorkflowTransitionsTransitionIdPropertiesKey() {
  return ['rest', '/rest/api/3/workflow/transitions/:transitionId/properties', 'POST'] as const
}

export function usePostRestApi3WorkflowTransitionsTransitionIdProperties<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3WorkflowTransitionsTransitionIdPropertiesKey()
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
            (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflow.transitions[':transitionId'].properties.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3WorkflowTransitionsTransitionIdPropertiesKey() {
  return ['rest', '/rest/api/3/workflow/transitions/:transitionId/properties', 'DELETE'] as const
}

export function useDeleteRestApi3WorkflowTransitionsTransitionIdProperties<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3WorkflowTransitionsTransitionIdPropertiesKey()
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
            (typeof client.rest.api)['3']['workflow']['transitions'][':transitionId']['properties']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflow.transitions[':transitionId'].properties.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3WorkflowEntityIdKey() {
  return ['rest', '/rest/api/3/workflow/:entityId', 'DELETE'] as const
}

export function useDeleteRestApi3WorkflowEntityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflow'][':entityId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflow'][':entityId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3WorkflowEntityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['workflow'][':entityId']['$delete']>
        },
      ) => parseResponse(client.rest.api['3'].workflow[':entityId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorkflowschemeKey(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['$get']>,
) {
  return ['rest', '/rest/api/3/workflowscheme', args] as const
}

export function useGetRestApi3Workflowscheme<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme']['$get']>>
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
        ? getGetRestApi3WorkflowschemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].workflowscheme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3Workflowscheme<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme']['$get']>>
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
        ? getGetRestApi3WorkflowschemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].workflowscheme.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3WorkflowschemeKey() {
  return ['rest', '/rest/api/3/workflowscheme', 'POST'] as const
}

export function usePostRestApi3Workflowscheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3WorkflowschemeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['$post']> },
      ) => parseResponse(client.rest.api['3'].workflowscheme.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorkflowschemeProjectKey(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['project']['$get']>,
) {
  return ['rest', '/rest/api/3/workflowscheme/project', args] as const
}

export function useGetRestApi3WorkflowschemeProject<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['project']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme']['project']['$get']>>
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
        ? getGetRestApi3WorkflowschemeProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme']['project']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].workflowscheme.project.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WorkflowschemeProject<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['project']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme']['project']['$get']>>
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
        ? getGetRestApi3WorkflowschemeProjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme']['project']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].workflowscheme.project.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3WorkflowschemeProjectKey() {
  return ['rest', '/rest/api/3/workflowscheme/project', 'PUT'] as const
}

export function usePutRestApi3WorkflowschemeProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme']['project']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['project']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3WorkflowschemeProjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['workflowscheme']['project']['$put']>
        },
      ) => parseResponse(client.rest.api['3'].workflowscheme.project.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorkflowschemeIdKey(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$get']>,
) {
  return ['rest', '/rest/api/3/workflowscheme/:id', args] as const
}

export function useGetRestApi3WorkflowschemeId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$get']>>
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
        ? getGetRestApi3WorkflowschemeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].workflowscheme[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WorkflowschemeId<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$get']>>
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
        ? getGetRestApi3WorkflowschemeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].workflowscheme[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3WorkflowschemeIdKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id', 'PUT'] as const
}

export function usePutRestApi3WorkflowschemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3WorkflowschemeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$put']>
        },
      ) => parseResponse(client.rest.api['3'].workflowscheme[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3WorkflowschemeIdKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id', 'DELETE'] as const
}

export function useDeleteRestApi3WorkflowschemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3WorkflowschemeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['$delete']>
        },
      ) => parseResponse(client.rest.api['3'].workflowscheme[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3WorkflowschemeIdCreatedraftKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/createdraft', 'POST'] as const
}

export function usePostRestApi3WorkflowschemeIdCreatedraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['workflowscheme'][':id']['createdraft']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['createdraft']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3WorkflowschemeIdCreatedraftKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['createdraft']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflowscheme[':id'].createdraft.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorkflowschemeIdDefaultKey(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$get']>,
) {
  return ['rest', '/rest/api/3/workflowscheme/:id/default', args] as const
}

export function useGetRestApi3WorkflowschemeIdDefault<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$get']>
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
        ? getGetRestApi3WorkflowschemeIdDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].workflowscheme[':id'].default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WorkflowschemeIdDefault<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$get']>
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
        ? getGetRestApi3WorkflowschemeIdDefaultKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].workflowscheme[':id'].default.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3WorkflowschemeIdDefaultKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/default', 'PUT'] as const
}

export function usePutRestApi3WorkflowschemeIdDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3WorkflowschemeIdDefaultKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$put']
          >
        },
      ) =>
        parseResponse(client.rest.api['3'].workflowscheme[':id'].default.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3WorkflowschemeIdDefaultKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/default', 'DELETE'] as const
}

export function useDeleteRestApi3WorkflowschemeIdDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3WorkflowschemeIdDefaultKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['default']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflowscheme[':id'].default.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorkflowschemeIdDraftKey(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$get']>,
) {
  return ['rest', '/rest/api/3/workflowscheme/:id/draft', args] as const
}

export function useGetRestApi3WorkflowschemeIdDraft<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$get']>
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
        ? getGetRestApi3WorkflowschemeIdDraftKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].workflowscheme[':id'].draft.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WorkflowschemeIdDraft<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$get']>
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
        ? getGetRestApi3WorkflowschemeIdDraftKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rest.api['3'].workflowscheme[':id'].draft.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3WorkflowschemeIdDraftKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/draft', 'PUT'] as const
}

export function usePutRestApi3WorkflowschemeIdDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3WorkflowschemeIdDraftKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$put']
          >
        },
      ) => parseResponse(client.rest.api['3'].workflowscheme[':id'].draft.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3WorkflowschemeIdDraftKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/draft', 'DELETE'] as const
}

export function useDeleteRestApi3WorkflowschemeIdDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3WorkflowschemeIdDraftKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['$delete']
          >
        },
      ) =>
        parseResponse(client.rest.api['3'].workflowscheme[':id'].draft.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorkflowschemeIdDraftDefaultKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$get']
  >,
) {
  return ['rest', '/rest/api/3/workflowscheme/:id/draft/default', args] as const
}

export function useGetRestApi3WorkflowschemeIdDraftDefault<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$get']
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
        ? getGetRestApi3WorkflowschemeIdDraftDefaultKey(args)
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
                (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$get']
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
          client.rest.api['3'].workflowscheme[':id'].draft.default.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WorkflowschemeIdDraftDefault<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$get']
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
        ? getGetRestApi3WorkflowschemeIdDraftDefaultKey(args)
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
                (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$get']
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
          client.rest.api['3'].workflowscheme[':id'].draft.default.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3WorkflowschemeIdDraftDefaultKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/draft/default', 'PUT'] as const
}

export function usePutRestApi3WorkflowschemeIdDraftDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3WorkflowschemeIdDraftDefaultKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflowscheme[':id'].draft.default.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3WorkflowschemeIdDraftDefaultKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/draft/default', 'DELETE'] as const
}

export function useDeleteRestApi3WorkflowschemeIdDraftDefault<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3WorkflowschemeIdDraftDefaultKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['default']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflowscheme[':id'].draft.default.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$get']
  >,
) {
  return ['rest', '/rest/api/3/workflowscheme/:id/draft/issuetype/:issueType', args] as const
}

export function useGetRestApi3WorkflowschemeIdDraftIssuetypeIssueType<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$get']
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
        ? getGetRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeKey(args)
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
                (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$get']
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
          client.rest.api['3'].workflowscheme[':id'].draft.issuetype[':issueType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WorkflowschemeIdDraftIssuetypeIssueType<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$get']
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
        ? getGetRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeKey(args)
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
                (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$get']
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
          client.rest.api['3'].workflowscheme[':id'].draft.issuetype[':issueType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/draft/issuetype/:issueType', 'PUT'] as const
}

export function usePutRestApi3WorkflowschemeIdDraftIssuetypeIssueType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflowscheme[':id'].draft.issuetype[':issueType'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/draft/issuetype/:issueType', 'DELETE'] as const
}

export function useDeleteRestApi3WorkflowschemeIdDraftIssuetypeIssueType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['issuetype'][':issueType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflowscheme[':id'].draft.issuetype[':issueType'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestApi3WorkflowschemeIdDraftPublishKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/draft/publish', 'POST'] as const
}

export function usePostRestApi3WorkflowschemeIdDraftPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['publish']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['publish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3WorkflowschemeIdDraftPublishKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflowscheme[':id'].draft.publish.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorkflowschemeIdDraftWorkflowKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$get']
  >,
) {
  return ['rest', '/rest/api/3/workflowscheme/:id/draft/workflow', args] as const
}

export function useGetRestApi3WorkflowschemeIdDraftWorkflow<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$get']
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
        ? getGetRestApi3WorkflowschemeIdDraftWorkflowKey(args)
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
                (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$get']
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
          client.rest.api['3'].workflowscheme[':id'].draft.workflow.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WorkflowschemeIdDraftWorkflow<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$get']
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
        ? getGetRestApi3WorkflowschemeIdDraftWorkflowKey(args)
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
                (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$get']
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
          client.rest.api['3'].workflowscheme[':id'].draft.workflow.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3WorkflowschemeIdDraftWorkflowKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/draft/workflow', 'PUT'] as const
}

export function usePutRestApi3WorkflowschemeIdDraftWorkflow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3WorkflowschemeIdDraftWorkflowKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflowscheme[':id'].draft.workflow.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3WorkflowschemeIdDraftWorkflowKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/draft/workflow', 'DELETE'] as const
}

export function useDeleteRestApi3WorkflowschemeIdDraftWorkflow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3WorkflowschemeIdDraftWorkflowKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['draft']['workflow']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflowscheme[':id'].draft.workflow.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorkflowschemeIdIssuetypeIssueTypeKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$get']
  >,
) {
  return ['rest', '/rest/api/3/workflowscheme/:id/issuetype/:issueType', args] as const
}

export function useGetRestApi3WorkflowschemeIdIssuetypeIssueType<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$get']
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
        ? getGetRestApi3WorkflowschemeIdIssuetypeIssueTypeKey(args)
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
                (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$get']
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
          client.rest.api['3'].workflowscheme[':id'].issuetype[':issueType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WorkflowschemeIdIssuetypeIssueType<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$get']
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
        ? getGetRestApi3WorkflowschemeIdIssuetypeIssueTypeKey(args)
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
                (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$get']
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
          client.rest.api['3'].workflowscheme[':id'].issuetype[':issueType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3WorkflowschemeIdIssuetypeIssueTypeKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/issuetype/:issueType', 'PUT'] as const
}

export function usePutRestApi3WorkflowschemeIdIssuetypeIssueType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3WorkflowschemeIdIssuetypeIssueTypeKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflowscheme[':id'].issuetype[':issueType'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3WorkflowschemeIdIssuetypeIssueTypeKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/issuetype/:issueType', 'DELETE'] as const
}

export function useDeleteRestApi3WorkflowschemeIdIssuetypeIssueType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3WorkflowschemeIdIssuetypeIssueTypeKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['issuetype'][':issueType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflowscheme[':id'].issuetype[':issueType'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorkflowschemeIdWorkflowKey(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$get']
  >,
) {
  return ['rest', '/rest/api/3/workflowscheme/:id/workflow', args] as const
}

export function useGetRestApi3WorkflowschemeIdWorkflow<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$get']>
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
        ? getGetRestApi3WorkflowschemeIdWorkflowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.rest.api['3'].workflowscheme[':id'].workflow.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WorkflowschemeIdWorkflow<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$get']>
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
        ? getGetRestApi3WorkflowschemeIdWorkflowKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.rest.api['3'].workflowscheme[':id'].workflow.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestApi3WorkflowschemeIdWorkflowKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/workflow', 'PUT'] as const
}

export function usePutRestApi3WorkflowschemeIdWorkflow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestApi3WorkflowschemeIdWorkflowKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$put']
          >
        },
      ) =>
        parseResponse(client.rest.api['3'].workflowscheme[':id'].workflow.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestApi3WorkflowschemeIdWorkflowKey() {
  return ['rest', '/rest/api/3/workflowscheme/:id/workflow', 'DELETE'] as const
}

export function useDeleteRestApi3WorkflowschemeIdWorkflow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestApi3WorkflowschemeIdWorkflowKey()
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
            (typeof client.rest.api)['3']['workflowscheme'][':id']['workflow']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest.api['3'].workflowscheme[':id'].workflow.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorklogDeletedKey(
  args: InferRequestType<(typeof client.rest.api)['3']['worklog']['deleted']['$get']>,
) {
  return ['rest', '/rest/api/3/worklog/deleted', args] as const
}

export function useGetRestApi3WorklogDeleted<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['worklog']['deleted']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['worklog']['deleted']['$get']>>
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
        ? getGetRestApi3WorklogDeletedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['worklog']['deleted']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].worklog.deleted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WorklogDeleted<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['worklog']['deleted']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['worklog']['deleted']['$get']>>
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
        ? getGetRestApi3WorklogDeletedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['worklog']['deleted']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].worklog.deleted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestApi3WorklogListKey() {
  return ['rest', '/rest/api/3/worklog/list', 'POST'] as const
}

export function usePostRestApi3WorklogList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rest.api)['3']['worklog']['list']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest.api)['3']['worklog']['list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestApi3WorklogListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rest.api)['3']['worklog']['list']['$post']> },
      ) => parseResponse(client.rest.api['3'].worklog.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRestApi3WorklogUpdatedKey(
  args: InferRequestType<(typeof client.rest.api)['3']['worklog']['updated']['$get']>,
) {
  return ['rest', '/rest/api/3/worklog/updated', args] as const
}

export function useGetRestApi3WorklogUpdated<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['worklog']['updated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['worklog']['updated']['$get']>>
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
        ? getGetRestApi3WorklogUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['worklog']['updated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].worklog.updated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestApi3WorklogUpdated<TError = unknown>(
  args: InferRequestType<(typeof client.rest.api)['3']['worklog']['updated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['worklog']['updated']['$get']>>
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
        ? getGetRestApi3WorklogUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rest.api)['3']['worklog']['updated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rest.api['3'].worklog.updated.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestAtlassianConnect1AddonsAddonKeyPropertiesKey(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties']['$get']
  >,
) {
  return ['rest', '/rest/atlassian-connect/1/addons/:addonKey/properties', args] as const
}

export function useGetRestAtlassianConnect1AddonsAddonKeyProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties']['$get']
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
        ? getGetRestAtlassianConnect1AddonsAddonKeyPropertiesKey(args)
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
                (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties']['$get']
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
          client.rest['atlassian-connect']['1'].addons[':addonKey'].properties.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestAtlassianConnect1AddonsAddonKeyProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties']['$get']
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
        ? getGetRestAtlassianConnect1AddonsAddonKeyPropertiesKey(args)
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
                (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties']['$get']
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
          client.rest['atlassian-connect']['1'].addons[':addonKey'].properties.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyKey(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$get']
  >,
) {
  return [
    'rest',
    '/rest/atlassian-connect/1/addons/:addonKey/properties/:propertyKey',
    args,
  ] as const
}

export function useGetRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$get']
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
        ? getGetRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyKey(args)
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
                (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$get']
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
          client.rest['atlassian-connect']['1'].addons[':addonKey'].properties[':propertyKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$get']
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
        ? getGetRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyKey(args)
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
                (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$get']
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
          client.rest['atlassian-connect']['1'].addons[':addonKey'].properties[':propertyKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyKey() {
  return [
    'rest',
    '/rest/atlassian-connect/1/addons/:addonKey/properties/:propertyKey',
    'PUT',
  ] as const
}

export function usePutRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyKey()
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
            (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest['atlassian-connect']['1'].addons[':addonKey'].properties[':propertyKey'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyKey() {
  return [
    'rest',
    '/rest/atlassian-connect/1/addons/:addonKey/properties/:propertyKey',
    'DELETE',
  ] as const
}

export function useDeleteRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyKey()
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
            (typeof client.rest)['atlassian-connect']['1']['addons'][':addonKey']['properties'][':propertyKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest['atlassian-connect']['1'].addons[':addonKey'].properties[
            ':propertyKey'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRestAtlassianConnect1AppModuleDynamicKey() {
  return ['rest', '/rest/atlassian-connect/1/app/module/dynamic'] as const
}

export function useGetRestAtlassianConnect1AppModuleDynamic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$get']
            >
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
        ? getGetRestAtlassianConnect1AppModuleDynamicKey()
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
                (typeof client.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$get']
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
          client.rest['atlassian-connect']['1'].app.module.dynamic.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestAtlassianConnect1AppModuleDynamic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$get']
            >
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
        ? getGetRestAtlassianConnect1AppModuleDynamicKey()
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
                (typeof client.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$get']
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
          client.rest['atlassian-connect']['1'].app.module.dynamic.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRestAtlassianConnect1AppModuleDynamicKey() {
  return ['rest', '/rest/atlassian-connect/1/app/module/dynamic', 'POST'] as const
}

export function usePostRestAtlassianConnect1AppModuleDynamic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestAtlassianConnect1AppModuleDynamicKey()
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
            (typeof client.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest['atlassian-connect']['1'].app.module.dynamic.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteRestAtlassianConnect1AppModuleDynamicKey() {
  return ['rest', '/rest/atlassian-connect/1/app/module/dynamic', 'DELETE'] as const
}

export function useDeleteRestAtlassianConnect1AppModuleDynamic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRestAtlassianConnect1AppModuleDynamicKey()
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
            (typeof client.rest)['atlassian-connect']['1']['app']['module']['dynamic']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.rest['atlassian-connect']['1'].app.module.dynamic.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestAtlassianConnect1MigrationFieldKey() {
  return ['rest', '/rest/atlassian-connect/1/migration/field', 'PUT'] as const
}

export function usePutRestAtlassianConnect1MigrationField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.rest)['atlassian-connect']['1']['migration']['field']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rest)['atlassian-connect']['1']['migration']['field']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestAtlassianConnect1MigrationFieldKey()
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
            (typeof client.rest)['atlassian-connect']['1']['migration']['field']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest['atlassian-connect']['1'].migration.field.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutRestAtlassianConnect1MigrationPropertiesEntityTypeKey() {
  return ['rest', '/rest/atlassian-connect/1/migration/properties/:entityType', 'PUT'] as const
}

export function usePutRestAtlassianConnect1MigrationPropertiesEntityType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest)['atlassian-connect']['1']['migration']['properties'][':entityType']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest)['atlassian-connect']['1']['migration']['properties'][':entityType']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestAtlassianConnect1MigrationPropertiesEntityTypeKey()
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
            (typeof client.rest)['atlassian-connect']['1']['migration']['properties'][':entityType']['$put']
          >
        },
      ) =>
        parseResponse(
          client.rest['atlassian-connect']['1'].migration.properties[':entityType'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRestAtlassianConnect1MigrationWorkflowRuleSearchKey() {
  return ['rest', '/rest/atlassian-connect/1/migration/workflow/rule/search', 'POST'] as const
}

export function usePostRestAtlassianConnect1MigrationWorkflowRuleSearch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.rest)['atlassian-connect']['1']['migration']['workflow']['rule']['search']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.rest)['atlassian-connect']['1']['migration']['workflow']['rule']['search']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestAtlassianConnect1MigrationWorkflowRuleSearchKey()
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
            (typeof client.rest)['atlassian-connect']['1']['migration']['workflow']['rule']['search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.rest['atlassian-connect']['1'].migration.workflow.rule.search.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
