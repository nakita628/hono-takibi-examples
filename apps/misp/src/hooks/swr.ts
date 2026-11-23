import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['admin'] as const
}

export function getAnalystDataKey() {
  return ['analystData'] as const
}

export function getAttributesKey() {
  return ['attributes'] as const
}

export function getAuthKeysKey() {
  return ['auth_keys'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getEventReportsKey() {
  return ['eventReports'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getFeedsKey() {
  return ['feeds'] as const
}

export function getGalaxiesKey() {
  return ['galaxies'] as const
}

export function getGalaxyClustersKey() {
  return ['galaxy_clusters'] as const
}

export function getNoticelistsKey() {
  return ['noticelists'] as const
}

export function getObjectsKey() {
  return ['objects'] as const
}

export function getOrganisationsKey() {
  return ['organisations'] as const
}

export function getServersKey() {
  return ['servers'] as const
}

export function getSharingGroupBlueprintsKey() {
  return ['sharing_group_blueprints'] as const
}

export function getSharingGroupsKey() {
  return ['sharing_groups'] as const
}

export function getSightingsKey() {
  return ['sightings'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTaxonomiesKey() {
  return ['taxonomies'] as const
}

export function getUserSettingsKey() {
  return ['user_settings'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWarninglistsKey() {
  return ['warninglists'] as const
}

export function getPostAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectTypeKey() {
  return [
    'analystData',
    '/analystData/add/:analystType/:analystObjectUUID/:analystObjectType',
    'POST',
  ] as const
}

export function usePostAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analystData.add)[':analystType'][':analystObjectUUID'][':analystObjectType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.analystData.add)[':analystType'][':analystObjectUUID'][':analystObjectType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectTypeKey()
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
            (typeof client.analystData.add)[':analystType'][':analystObjectUUID'][':analystObjectType']['$post']
          >
        },
      ) =>
        parseResponse(
          client.analystData.add[':analystType'][':analystObjectUUID'][':analystObjectType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAnalystDataEditAnalystTypeAnalystDataIDKey() {
  return ['analystData', '/analystData/edit/:analystType/:analystDataID', 'POST'] as const
}

export function usePostAnalystDataEditAnalystTypeAnalystDataID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.analystData.edit)[':analystType'][':analystDataID']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.analystData.edit)[':analystType'][':analystDataID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalystDataEditAnalystTypeAnalystDataIDKey()
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
            (typeof client.analystData.edit)[':analystType'][':analystDataID']['$post']
          >
        },
      ) =>
        parseResponse(
          client.analystData.edit[':analystType'][':analystDataID'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAnalystDataDeleteAnalystTypeAnalystDataIDKey() {
  return ['analystData', '/analystData/delete/:analystType/:analystDataID', 'DELETE'] as const
}

export function useDeleteAnalystDataDeleteAnalystTypeAnalystDataID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analystData.delete)[':analystType'][':analystDataID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.analystData.delete)[':analystType'][':analystDataID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAnalystDataDeleteAnalystTypeAnalystDataIDKey()
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
            (typeof client.analystData.delete)[':analystType'][':analystDataID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.analystData.delete[':analystType'][':analystDataID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAnalystDataIndexAnalystTypeKey(
  args: InferRequestType<(typeof client.analystData.index)[':analystType']['$get']>,
) {
  return ['analystData', '/analystData/index/:analystType', args] as const
}

export function useGetAnalystDataIndexAnalystType<TError = unknown>(
  args: InferRequestType<(typeof client.analystData.index)[':analystType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analystData.index)[':analystType']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalystDataIndexAnalystTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analystData.index)[':analystType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analystData.index[':analystType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalystDataIndexAnalystType<TError = unknown>(
  args: InferRequestType<(typeof client.analystData.index)[':analystType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analystData.index)[':analystType']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalystDataIndexAnalystTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analystData.index)[':analystType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analystData.index[':analystType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalystDataViewAnalystTypeAnalystDataIDKey(
  args: InferRequestType<
    (typeof client.analystData.view)[':analystType'][':analystDataID']['$get']
  >,
) {
  return ['analystData', '/analystData/view/:analystType/:analystDataID', args] as const
}

export function useGetAnalystDataViewAnalystTypeAnalystDataID<TError = unknown>(
  args: InferRequestType<
    (typeof client.analystData.view)[':analystType'][':analystDataID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.analystData.view)[':analystType'][':analystDataID']['$get']>
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
        ? getGetAnalystDataViewAnalystTypeAnalystDataIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.analystData.view)[':analystType'][':analystDataID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analystData.view[':analystType'][':analystDataID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalystDataViewAnalystTypeAnalystDataID<TError = unknown>(
  args: InferRequestType<
    (typeof client.analystData.view)[':analystType'][':analystDataID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.analystData.view)[':analystType'][':analystDataID']['$get']>
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
        ? getGetAnalystDataViewAnalystTypeAnalystDataIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.analystData.view)[':analystType'][':analystDataID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analystData.view[':analystType'][':analystDataID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAnalystDataIndexMinimalKey() {
  return ['analystData', '/analystData/indexMinimal', 'POST'] as const
}

export function usePostAnalystDataIndexMinimal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analystData.indexMinimal.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.analystData.indexMinimal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalystDataIndexMinimalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.analystData.indexMinimal.$post> },
      ) => parseResponse(client.analystData.indexMinimal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttributesRestSearchKey() {
  return ['attributes', '/attributes/restSearch', 'POST'] as const
}

export function usePostAttributesRestSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.attributes.restSearch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.attributes.restSearch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttributesRestSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.attributes.restSearch.$post> },
      ) => parseResponse(client.attributes.restSearch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttributesAddEventIdKey() {
  return ['attributes', '/attributes/add/:eventId', 'POST'] as const
}

export function usePostAttributesAddEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attributes.add)[':eventId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attributes.add)[':eventId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttributesAddEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.attributes.add)[':eventId']['$post']> },
      ) => parseResponse(client.attributes.add[':eventId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAttributesEditAttributeIdKey() {
  return ['attributes', '/attributes/edit/:attributeId', 'PUT'] as const
}

export function usePutAttributesEditAttributeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attributes.edit)[':attributeId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attributes.edit)[':attributeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAttributesEditAttributeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.attributes.edit)[':attributeId']['$put']> },
      ) => parseResponse(client.attributes.edit[':attributeId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAttributesDeleteAttributeIdKey() {
  return ['attributes', '/attributes/delete/:attributeId', 'DELETE'] as const
}

export function useDeleteAttributesDeleteAttributeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attributes.delete)[':attributeId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attributes.delete)[':attributeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAttributesDeleteAttributeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.attributes.delete)[':attributeId']['$delete']> },
      ) => parseResponse(client.attributes.delete[':attributeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttributesRestoreAttributeIdKey() {
  return ['attributes', '/attributes/restore/:attributeId', 'POST'] as const
}

export function usePostAttributesRestoreAttributeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attributes.restore)[':attributeId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attributes.restore)[':attributeId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttributesRestoreAttributeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.attributes.restore)[':attributeId']['$post']> },
      ) => parseResponse(client.attributes.restore[':attributeId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttributesAddTagAttributeIdTagIdLocalLocalKey() {
  return ['attributes', '/attributes/addTag/:attributeId/:tagId/local:{local}', 'POST'] as const
}

export function usePostAttributesAddTagAttributeIdTagIdLocalLocal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.attributes.addTag)[':attributeId'][':tagId']['local:{local}']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.attributes.addTag)[':attributeId'][':tagId']['local:{local}']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttributesAddTagAttributeIdTagIdLocalLocalKey()
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
            (typeof client.attributes.addTag)[':attributeId'][':tagId']['local:{local}']['$post']
          >
        },
      ) =>
        parseResponse(
          client.attributes.addTag[':attributeId'][':tagId']['local:{local}'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAttributesRemoveTagAttributeIdTagIdKey() {
  return ['attributes', '/attributes/removeTag/:attributeId/:tagId', 'POST'] as const
}

export function usePostAttributesRemoveTagAttributeIdTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.attributes.removeTag)[':attributeId'][':tagId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attributes.removeTag)[':attributeId'][':tagId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttributesRemoveTagAttributeIdTagIdKey()
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
            (typeof client.attributes.removeTag)[':attributeId'][':tagId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.attributes.removeTag[':attributeId'][':tagId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAttributesKey() {
  return ['attributes', '/attributes'] as const
}

export function useGetAttributes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attributes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAttributesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attributes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attributes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttributes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attributes.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAttributesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attributes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attributes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAttributesViewAttributeIdKey(
  args: InferRequestType<(typeof client.attributes.view)[':attributeId']['$get']>,
) {
  return ['attributes', '/attributes/view/:attributeId', args] as const
}

export function useGetAttributesViewAttributeId<TError = unknown>(
  args: InferRequestType<(typeof client.attributes.view)[':attributeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attributes.view)[':attributeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttributesViewAttributeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attributes.view)[':attributeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attributes.view[':attributeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttributesViewAttributeId<TError = unknown>(
  args: InferRequestType<(typeof client.attributes.view)[':attributeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attributes.view)[':attributeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAttributesViewAttributeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.attributes.view)[':attributeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attributes.view[':attributeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAttributesGetAttributeByB64ValueBase64ValueKey(
  args: InferRequestType<(typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']>,
) {
  return ['attributes', '/attributes/getAttributeByB64Value/:base64Value', args] as const
}

export function useGetAttributesGetAttributeByB64ValueBase64Value<TError = unknown>(
  args: InferRequestType<(typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']>
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
        ? getGetAttributesGetAttributeByB64ValueBase64ValueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.attributes.getAttributeByB64Value[':base64Value'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttributesGetAttributeByB64ValueBase64Value<TError = unknown>(
  args: InferRequestType<(typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']>
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
        ? getGetAttributesGetAttributeByB64ValueBase64ValueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.attributes.getAttributeByB64Value[':base64Value'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAttributesAttributeStatisticsContextPercentageKey(
  args: InferRequestType<
    (typeof client.attributes.attributeStatistics)[':context'][':percentage']['$get']
  >,
) {
  return ['attributes', '/attributes/attributeStatistics/:context/:percentage', args] as const
}

export function useGetAttributesAttributeStatisticsContextPercentage<TError = unknown>(
  args: InferRequestType<
    (typeof client.attributes.attributeStatistics)[':context'][':percentage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.attributes.attributeStatistics)[':context'][':percentage']['$get']
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
        ? getGetAttributesAttributeStatisticsContextPercentageKey(args)
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
                (typeof client.attributes.attributeStatistics)[':context'][':percentage']['$get']
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
          client.attributes.attributeStatistics[':context'][':percentage'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttributesAttributeStatisticsContextPercentage<TError = unknown>(
  args: InferRequestType<
    (typeof client.attributes.attributeStatistics)[':context'][':percentage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.attributes.attributeStatistics)[':context'][':percentage']['$get']
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
        ? getGetAttributesAttributeStatisticsContextPercentageKey(args)
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
                (typeof client.attributes.attributeStatistics)[':context'][':percentage']['$get']
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
          client.attributes.attributeStatistics[':context'][':percentage'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAttributesDescribeTypesKey() {
  return ['attributes', '/attributes/describeTypes'] as const
}

export function useGetAttributesDescribeTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.attributes.describeTypes.$get>>>
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
        ? getGetAttributesDescribeTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.attributes.describeTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attributes.describeTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttributesDescribeTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.attributes.describeTypes.$get>>>
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
        ? getGetAttributesDescribeTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.attributes.describeTypes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attributes.describeTypes.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAttributesEnrichAttributeIdKey() {
  return ['attributes', '/attributes/enrich/:attributeId', 'POST'] as const
}

export function usePostAttributesEnrichAttributeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attributes.enrich)[':attributeId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attributes.enrich)[':attributeId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttributesEnrichAttributeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.attributes.enrich)[':attributeId']['$post']> },
      ) => parseResponse(client.attributes.enrich[':attributeId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsAddKey() {
  return ['collections', '/collections/add', 'POST'] as const
}

export function usePostCollectionsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.add.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.collections.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.collections.add.$post> }) =>
        parseResponse(client.collections.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsEditCollectionIdKey() {
  return ['collections', '/collections/edit/:collectionId', 'POST'] as const
}

export function usePostCollectionsEditCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections.edit)[':collectionId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections.edit)[':collectionId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsEditCollectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.collections.edit)[':collectionId']['$post']> },
      ) => parseResponse(client.collections.edit[':collectionId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCollectionsDeleteCollectionIdKey() {
  return ['collections', '/collections/delete/:collectionId', 'DELETE'] as const
}

export function useDeleteCollectionsDeleteCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections.delete)[':collectionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections.delete)[':collectionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCollectionsDeleteCollectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.collections.delete)[':collectionId']['$delete']>
        },
      ) => parseResponse(client.collections.delete[':collectionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCollectionsViewCollectionIdKey(
  args: InferRequestType<(typeof client.collections.view)[':collectionId']['$get']>,
) {
  return ['collections', '/collections/view/:collectionId', args] as const
}

export function useGetCollectionsViewCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.collections.view)[':collectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections.view)[':collectionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollectionsViewCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections.view)[':collectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.view[':collectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionsViewCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.collections.view)[':collectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections.view)[':collectionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCollectionsViewCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections.view)[':collectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collections.view[':collectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollectionsIndexFilterKey() {
  return ['collections', '/collections/index/:filter', 'POST'] as const
}

export function usePostCollectionsIndexFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections.index)[':filter']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.collections.index)[':filter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsIndexFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.collections.index)[':filter']['$post']> },
      ) => parseResponse(client.collections.index[':filter'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventReportsViewEventReportIdKey(
  args: InferRequestType<(typeof client.eventReports.view)[':eventReportId']['$get']>,
) {
  return ['eventReports', '/eventReports/view/:eventReportId', args] as const
}

export function useGetEventReportsViewEventReportId<TError = unknown>(
  args: InferRequestType<(typeof client.eventReports.view)[':eventReportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eventReports.view)[':eventReportId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEventReportsViewEventReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eventReports.view)[':eventReportId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eventReports.view[':eventReportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventReportsViewEventReportId<TError = unknown>(
  args: InferRequestType<(typeof client.eventReports.view)[':eventReportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eventReports.view)[':eventReportId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEventReportsViewEventReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.eventReports.view)[':eventReportId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.eventReports.view[':eventReportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventReportsAddEventIdKey() {
  return ['eventReports', '/eventReports/add/:eventId', 'POST'] as const
}

export function usePostEventReportsAddEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eventReports.add)[':eventId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eventReports.add)[':eventId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventReportsAddEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.eventReports.add)[':eventId']['$post']> },
      ) => parseResponse(client.eventReports.add[':eventId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventReportsEditEventReportIdKey() {
  return ['eventReports', '/eventReports/edit/:eventReportId', 'POST'] as const
}

export function usePostEventReportsEditEventReportId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eventReports.edit)[':eventReportId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eventReports.edit)[':eventReportId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventReportsEditEventReportIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.eventReports.edit)[':eventReportId']['$post']> },
      ) => parseResponse(client.eventReports.edit[':eventReportId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventReportsDeleteEventReportIdKey() {
  return ['eventReports', '/eventReports/delete/:eventReportId', 'POST'] as const
}

export function usePostEventReportsDeleteEventReportId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eventReports.delete)[':eventReportId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eventReports.delete)[':eventReportId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventReportsDeleteEventReportIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.eventReports.delete)[':eventReportId']['$post']>
        },
      ) => parseResponse(client.eventReports.delete[':eventReportId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventReportsDeleteEventReportIdHardDeleteKey() {
  return ['eventReports', '/eventReports/delete/:eventReportId/:hardDelete', 'POST'] as const
}

export function usePostEventReportsDeleteEventReportIdHardDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.eventReports.delete)[':eventReportId'][':hardDelete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eventReports.delete)[':eventReportId'][':hardDelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventReportsDeleteEventReportIdHardDeleteKey()
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
            (typeof client.eventReports.delete)[':eventReportId'][':hardDelete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.eventReports.delete[':eventReportId'][':hardDelete'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEventReportsRestoreEventReportIdKey() {
  return ['eventReports', '/eventReports/restore/:eventReportId', 'POST'] as const
}

export function usePostEventReportsRestoreEventReportId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eventReports.restore)[':eventReportId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eventReports.restore)[':eventReportId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventReportsRestoreEventReportIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.eventReports.restore)[':eventReportId']['$post']>
        },
      ) => parseResponse(client.eventReports.restore[':eventReportId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventReportsIndexKey() {
  return ['eventReports', '/eventReports/index'] as const
}

export function useGetEventReportsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventReports.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventReportsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventReports.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eventReports.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventReportsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventReports.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventReportsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventReports.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.eventReports.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventReportsImportReportFromUrlEventIdKey() {
  return ['eventReports', '/eventReports/importReportFromUrl/:eventId', 'POST'] as const
}

export function usePostEventReportsImportReportFromUrlEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eventReports.importReportFromUrl)[':eventId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.eventReports.importReportFromUrl)[':eventId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventReportsImportReportFromUrlEventIdKey()
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
            (typeof client.eventReports.importReportFromUrl)[':eventId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.eventReports.importReportFromUrl[':eventId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEventsRestSearchKey() {
  return ['events', '/events/restSearch', 'POST'] as const
}

export function usePostEventsRestSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.restSearch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.events.restSearch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsRestSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.restSearch.$post> }) =>
        parseResponse(client.events.restSearch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsAddKey() {
  return ['events', '/events/add', 'POST'] as const
}

export function usePostEventsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.add.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.events.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.add.$post> }) =>
        parseResponse(client.events.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutEventsEditEventIdKey() {
  return ['events', '/events/edit/:eventId', 'PUT'] as const
}

export function usePutEventsEditEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events.edit)[':eventId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events.edit)[':eventId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventsEditEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events.edit)[':eventId']['$put']> },
      ) => parseResponse(client.events.edit[':eventId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEventsDeleteEventIdKey() {
  return ['events', '/events/delete/:eventId', 'DELETE'] as const
}

export function useDeleteEventsDeleteEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.delete)[':eventId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events.delete)[':eventId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventsDeleteEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events.delete)[':eventId']['$delete']> },
      ) => parseResponse(client.events.delete[':eventId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsKey() {
  return ['events', '/events'] as const
}

export function useGetEvents<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEvents<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventsIndexKey() {
  return ['events', '/events/index', 'POST'] as const
}

export function usePostEventsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.events.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.index.$post> }) =>
        parseResponse(client.events.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsViewEventIdKey(
  args: InferRequestType<(typeof client.events.view)[':eventId']['$get']>,
) {
  return ['events', '/events/view/:eventId', args] as const
}

export function useGetEventsViewEventId<TError = unknown>(
  args: InferRequestType<(typeof client.events.view)[':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events.view)[':eventId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEventsViewEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events.view)[':eventId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.view[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsViewEventId<TError = unknown>(
  args: InferRequestType<(typeof client.events.view)[':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events.view)[':eventId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEventsViewEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events.view)[':eventId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.view[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventsPublishEventIdKey() {
  return ['events', '/events/publish/:eventId', 'POST'] as const
}

export function usePostEventsPublishEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.publish)[':eventId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events.publish)[':eventId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsPublishEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events.publish)[':eventId']['$post']> },
      ) => parseResponse(client.events.publish[':eventId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsUnpublishEventIdKey() {
  return ['events', '/events/unpublish/:eventId', 'POST'] as const
}

export function usePostEventsUnpublishEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.unpublish)[':eventId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events.unpublish)[':eventId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsUnpublishEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events.unpublish)[':eventId']['$post']> },
      ) => parseResponse(client.events.unpublish[':eventId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsAddTagEventIdTagIdLocalLocalKey() {
  return ['events', '/events/addTag/:eventId/:tagId/local:{local}', 'POST'] as const
}

export function usePostEventsAddTagEventIdTagIdLocalLocal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.events.addTag)[':eventId'][':tagId']['local:{local}']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events.addTag)[':eventId'][':tagId']['local:{local}']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsAddTagEventIdTagIdLocalLocalKey()
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
            (typeof client.events.addTag)[':eventId'][':tagId']['local:{local}']['$post']
          >
        },
      ) =>
        parseResponse(
          client.events.addTag[':eventId'][':tagId']['local:{local}'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEventsRemoveTagEventIdTagIdKey() {
  return ['events', '/events/removeTag/:eventId/:tagId', 'POST'] as const
}

export function usePostEventsRemoveTagEventIdTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.removeTag)[':eventId'][':tagId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events.removeTag)[':eventId'][':tagId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsRemoveTagEventIdTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.events.removeTag)[':eventId'][':tagId']['$post']>
        },
      ) => parseResponse(client.events.removeTag[':eventId'][':tagId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsEnrichEventEventIdKey() {
  return ['events', '/events/enrichEvent/:eventId', 'POST'] as const
}

export function usePostEventsEnrichEventEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.enrichEvent)[':eventId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events.enrichEvent)[':eventId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsEnrichEventEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events.enrichEvent)[':eventId']['$post']> },
      ) => parseResponse(client.events.enrichEvent[':eventId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGalaxiesKey() {
  return ['galaxies', '/galaxies'] as const
}

export function useGetGalaxies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGalaxiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.galaxies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGalaxies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGalaxiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.galaxies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGalaxiesKey() {
  return ['galaxies', '/galaxies', 'POST'] as const
}

export function usePostGalaxies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.galaxies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGalaxiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.galaxies.$post> }) =>
        parseResponse(client.galaxies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGalaxiesViewGalaxyIdKey(
  args: InferRequestType<(typeof client.galaxies.view)[':galaxyId']['$get']>,
) {
  return ['galaxies', '/galaxies/view/:galaxyId', args] as const
}

export function useGetGalaxiesViewGalaxyId<TError = unknown>(
  args: InferRequestType<(typeof client.galaxies.view)[':galaxyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.galaxies.view)[':galaxyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGalaxiesViewGalaxyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.galaxies.view)[':galaxyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.galaxies.view[':galaxyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGalaxiesViewGalaxyId<TError = unknown>(
  args: InferRequestType<(typeof client.galaxies.view)[':galaxyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.galaxies.view)[':galaxyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGalaxiesViewGalaxyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.galaxies.view)[':galaxyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.galaxies.view[':galaxyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGalaxiesUpdateKey() {
  return ['galaxies', '/galaxies/update', 'POST'] as const
}

export function usePostGalaxiesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.update.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGalaxiesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.galaxies.update.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGalaxiesDeleteGalaxyIdKey() {
  return ['galaxies', '/galaxies/delete/:galaxyId', 'DELETE'] as const
}

export function useDeleteGalaxiesDeleteGalaxyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxies.delete)[':galaxyId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.galaxies.delete)[':galaxyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGalaxiesDeleteGalaxyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.galaxies.delete)[':galaxyId']['$delete']> },
      ) => parseResponse(client.galaxies.delete[':galaxyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGalaxiesImportKey() {
  return ['galaxies', '/galaxies/import', 'POST'] as const
}

export function usePostGalaxiesImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.galaxies.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGalaxiesImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.galaxies.import.$post> }) =>
        parseResponse(client.galaxies.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGalaxiesExportGalaxyIdKey() {
  return ['galaxies', '/galaxies/export/:galaxyId', 'POST'] as const
}

export function usePostGalaxiesExportGalaxyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxies.export)[':galaxyId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.galaxies.export)[':galaxyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGalaxiesExportGalaxyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.galaxies.export)[':galaxyId']['$post']> },
      ) => parseResponse(client.galaxies.export[':galaxyId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalKey() {
  return [
    'galaxies',
    '/galaxies/attachCluster/:attachTargetId/:attachTargetType/local:{local}',
    'POST',
  ] as const
}

export function usePostGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocal<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.galaxies.attachCluster)[':attachTargetId'][':attachTargetType']['local:{local}']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.galaxies.attachCluster)[':attachTargetId'][':attachTargetType']['local:{local}']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalKey()
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
            (typeof client.galaxies.attachCluster)[':attachTargetId'][':attachTargetType']['local:{local}']['$post']
          >
        },
      ) =>
        parseResponse(
          client.galaxies.attachCluster[':attachTargetId'][':attachTargetType'][
            'local:{local}'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGalaxyClustersAddGalaxyIdKey() {
  return ['galaxy_clusters', '/galaxy_clusters/add/:galaxyId', 'POST'] as const
}

export function usePostGalaxyClustersAddGalaxyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxy_clusters.add)[':galaxyId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.galaxy_clusters.add)[':galaxyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGalaxyClustersAddGalaxyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.galaxy_clusters.add)[':galaxyId']['$post']> },
      ) => parseResponse(client.galaxy_clusters.add[':galaxyId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutGalaxyClustersEditGalaxyClusterIdKey() {
  return ['galaxy_clusters', '/galaxy_clusters/edit/:galaxyClusterId', 'PUT'] as const
}

export function usePutGalaxyClustersEditGalaxyClusterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxy_clusters.edit)[':galaxyClusterId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.galaxy_clusters.edit)[':galaxyClusterId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGalaxyClustersEditGalaxyClusterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.galaxy_clusters.edit)[':galaxyClusterId']['$put']>
        },
      ) => parseResponse(client.galaxy_clusters.edit[':galaxyClusterId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGalaxyClustersIndexGalaxyIdKey(
  args: InferRequestType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>,
) {
  return ['galaxy_clusters', '/galaxy_clusters/index/:galaxyId', args] as const
}

export function useGetGalaxyClustersIndexGalaxyId<TError = unknown>(
  args: InferRequestType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGalaxyClustersIndexGalaxyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.galaxy_clusters.index[':galaxyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGalaxyClustersIndexGalaxyId<TError = unknown>(
  args: InferRequestType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGalaxyClustersIndexGalaxyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.galaxy_clusters.index[':galaxyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGalaxyClustersIndexGalaxyIdKey() {
  return ['galaxy_clusters', '/galaxy_clusters/index/:galaxyId', 'POST'] as const
}

export function usePostGalaxyClustersIndexGalaxyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxy_clusters.index)[':galaxyId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.galaxy_clusters.index)[':galaxyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGalaxyClustersIndexGalaxyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.galaxy_clusters.index)[':galaxyId']['$post']> },
      ) => parseResponse(client.galaxy_clusters.index[':galaxyId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGalaxyClustersViewGalaxyClusterIdKey(
  args: InferRequestType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>,
) {
  return ['galaxy_clusters', '/galaxy_clusters/view/:galaxyClusterId', args] as const
}

export function useGetGalaxyClustersViewGalaxyClusterId<TError = unknown>(
  args: InferRequestType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGalaxyClustersViewGalaxyClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.galaxy_clusters.view[':galaxyClusterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGalaxyClustersViewGalaxyClusterId<TError = unknown>(
  args: InferRequestType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGalaxyClustersViewGalaxyClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.galaxy_clusters.view[':galaxyClusterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGalaxyClustersPublishGalaxyClusterIdKey() {
  return ['galaxy_clusters', '/galaxy_clusters/publish/:galaxyClusterId', 'POST'] as const
}

export function usePostGalaxyClustersPublishGalaxyClusterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxy_clusters.publish)[':galaxyClusterId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.galaxy_clusters.publish)[':galaxyClusterId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGalaxyClustersPublishGalaxyClusterIdKey()
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
            (typeof client.galaxy_clusters.publish)[':galaxyClusterId']['$post']
          >
        },
      ) =>
        parseResponse(client.galaxy_clusters.publish[':galaxyClusterId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGalaxyClustersUnpublishGalaxyClusterIdKey() {
  return ['galaxy_clusters', '/galaxy_clusters/unpublish/:galaxyClusterId', 'POST'] as const
}

export function usePostGalaxyClustersUnpublishGalaxyClusterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.galaxy_clusters.unpublish)[':galaxyClusterId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.galaxy_clusters.unpublish)[':galaxyClusterId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGalaxyClustersUnpublishGalaxyClusterIdKey()
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
            (typeof client.galaxy_clusters.unpublish)[':galaxyClusterId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.galaxy_clusters.unpublish[':galaxyClusterId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGalaxyClustersDeleteGalaxyClusterIdKey() {
  return ['galaxy_clusters', '/galaxy_clusters/delete/:galaxyClusterId', 'POST'] as const
}

export function usePostGalaxyClustersDeleteGalaxyClusterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxy_clusters.delete)[':galaxyClusterId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.galaxy_clusters.delete)[':galaxyClusterId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGalaxyClustersDeleteGalaxyClusterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.galaxy_clusters.delete)[':galaxyClusterId']['$post']>
        },
      ) =>
        parseResponse(client.galaxy_clusters.delete[':galaxyClusterId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGalaxyClustersRestoreGalaxyClusterIdKey() {
  return ['galaxy_clusters', '/galaxy_clusters/restore/:galaxyClusterId', 'POST'] as const
}

export function usePostGalaxyClustersRestoreGalaxyClusterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxy_clusters.restore)[':galaxyClusterId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.galaxy_clusters.restore)[':galaxyClusterId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGalaxyClustersRestoreGalaxyClusterIdKey()
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
            (typeof client.galaxy_clusters.restore)[':galaxyClusterId']['$post']
          >
        },
      ) =>
        parseResponse(client.galaxy_clusters.restore[':galaxyClusterId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersInitiatePasswordResetUserIdFirstTimeResetKey() {
  return ['users', '/users/initiatePasswordReset/:userId/:firstTimeReset', 'POST'] as const
}

export function usePostUsersInitiatePasswordResetUserIdFirstTimeReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users.initiatePasswordReset)[':userId'][':firstTimeReset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.users.initiatePasswordReset)[':userId'][':firstTimeReset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersInitiatePasswordResetUserIdFirstTimeResetKey()
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
            (typeof client.users.initiatePasswordReset)[':userId'][':firstTimeReset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.users.initiatePasswordReset[':userId'][':firstTimeReset'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersAddKey() {
  return ['admin', '/admin/users/add', 'POST'] as const
}

export function usePostAdminUsersAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.add.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.users.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.users.add.$post> }) =>
        parseResponse(client.admin.users.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminUsersEditUserIdKey() {
  return ['admin', '/admin/users/edit/:userId', 'PUT'] as const
}

export function usePutAdminUsersEditUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users.edit)[':userId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users.edit)[':userId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminUsersEditUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.users.edit)[':userId']['$put']> },
      ) => parseResponse(client.admin.users.edit[':userId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminUsersDeleteUserIdKey() {
  return ['admin', '/admin/users/delete/:userId', 'DELETE'] as const
}

export function useDeleteAdminUsersDeleteUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users.delete)[':userId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users.delete)[':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminUsersDeleteUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.users.delete)[':userId']['$delete']> },
      ) => parseResponse(client.admin.users.delete[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUsersKey() {
  return ['admin', '/admin/users'] as const
}

export function useGetAdminUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminUsersViewUserIdKey(
  args: InferRequestType<(typeof client.admin.users.view)[':userId']['$get']>,
) {
  return ['admin', '/admin/users/view/:userId', args] as const
}

export function useGetAdminUsersViewUserId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users.view)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users.view)[':userId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminUsersViewUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users.view)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.view[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsersViewUserId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users.view)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users.view)[':userId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminUsersViewUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users.view)[':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.view[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersTotpDeleteUserIdKey() {
  return ['users', '/users/totp_delete/:userId', 'DELETE'] as const
}

export function useDeleteUsersTotpDeleteUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.totp_delete)[':userId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users.totp_delete)[':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersTotpDeleteUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users.totp_delete)[':userId']['$delete']> },
      ) => parseResponse(client.users.totp_delete[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrganisationsAddKey() {
  return ['admin', '/admin/organisations/add', 'POST'] as const
}

export function usePostAdminOrganisationsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.organisations.add.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.organisations.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrganisationsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.organisations.add.$post> },
      ) => parseResponse(client.admin.organisations.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminOrganisationsEditOrganisationIdKey() {
  return ['admin', '/admin/organisations/edit/:organisationId', 'PUT'] as const
}

export function usePutAdminOrganisationsEditOrganisationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.organisations.edit)[':organisationId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.organisations.edit)[':organisationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminOrganisationsEditOrganisationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.organisations.edit)[':organisationId']['$put']>
        },
      ) =>
        parseResponse(client.admin.organisations.edit[':organisationId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminOrganisationsDeleteOrganisationIdKey() {
  return ['admin', '/admin/organisations/delete/:organisationId', 'DELETE'] as const
}

export function useDeleteAdminOrganisationsDeleteOrganisationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.organisations.delete)[':organisationId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.organisations.delete)[':organisationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminOrganisationsDeleteOrganisationIdKey()
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
            (typeof client.admin.organisations.delete)[':organisationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.organisations.delete[':organisationId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminLogsKey() {
  return ['admin', '/admin/logs', 'POST'] as const
}

export function usePostAdminLogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.admin.logs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminLogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.logs.$post> }) =>
        parseResponse(client.admin.logs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganisationsKey() {
  return ['organisations', '/organisations'] as const
}

export function useGetOrganisations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganisationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganisationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organisations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganisationsViewOrganisationIdKey(
  args: InferRequestType<(typeof client.organisations.view)[':organisationId']['$get']>,
) {
  return ['organisations', '/organisations/view/:organisationId', args] as const
}

export function useGetOrganisationsViewOrganisationId<TError = unknown>(
  args: InferRequestType<(typeof client.organisations.view)[':organisationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations.view)[':organisationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganisationsViewOrganisationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations.view)[':organisationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations.view[':organisationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganisationsViewOrganisationId<TError = unknown>(
  args: InferRequestType<(typeof client.organisations.view)[':organisationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations.view)[':organisationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganisationsViewOrganisationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organisations.view)[':organisationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organisations.view[':organisationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServersAddKey() {
  return ['servers', '/servers/add', 'POST'] as const
}

export function usePostServersAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.add.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.servers.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServersAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.servers.add.$post> }) =>
        parseResponse(client.servers.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutServersEditServerIdKey() {
  return ['servers', '/servers/edit/:serverId', 'PUT'] as const
}

export function usePutServersEditServerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.servers.edit)[':serverId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.servers.edit)[':serverId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServersEditServerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.servers.edit)[':serverId']['$put']> },
      ) => parseResponse(client.servers.edit[':serverId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServersDeleteServerIdKey() {
  return ['servers', '/servers/delete/:serverId', 'POST'] as const
}

export function usePostServersDeleteServerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers.delete)[':serverId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.servers.delete)[':serverId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServersDeleteServerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.servers.delete)[':serverId']['$post']> },
      ) => parseResponse(client.servers.delete[':serverId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServersKey() {
  return ['servers', '/servers'] as const
}

export function useGetServers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.servers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.servers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServersPullServerIdPullTechniqueKey(
  args: InferRequestType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>,
) {
  return ['servers', '/servers/pull/:serverId/:pullTechnique', args] as const
}

export function useGetServersPullServerIdPullTechnique<TError = unknown>(
  args: InferRequestType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServersPullServerIdPullTechniqueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.servers.pull[':serverId'][':pullTechnique'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServersPullServerIdPullTechnique<TError = unknown>(
  args: InferRequestType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServersPullServerIdPullTechniqueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.servers.pull[':serverId'][':pullTechnique'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServersPushServerIdPushTechniqueKey(
  args: InferRequestType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>,
) {
  return ['servers', '/servers/push/:serverId/:pushTechnique', args] as const
}

export function useGetServersPushServerIdPushTechnique<TError = unknown>(
  args: InferRequestType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServersPushServerIdPushTechniqueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.servers.push[':serverId'][':pushTechnique'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServersPushServerIdPushTechnique<TError = unknown>(
  args: InferRequestType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServersPushServerIdPushTechniqueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.servers.push[':serverId'][':pushTechnique'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServersGetVersionKey() {
  return ['servers', '/servers/getVersion'] as const
}

export function useGetServersGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.getVersion.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServersGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.getVersion.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.servers.getVersion.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServersGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.getVersion.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServersGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.getVersion.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.servers.getVersion.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServersGetPyMISPVersionKey() {
  return ['servers', '/servers/getPyMISPVersion'] as const
}

export function useGetServersGetPyMISPVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.getPyMISPVersion.$get>>>
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
        ? getGetServersGetPyMISPVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.servers.getPyMISPVersion.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.servers.getPyMISPVersion.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServersGetPyMISPVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.getPyMISPVersion.$get>>>
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
        ? getGetServersGetPyMISPVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.servers.getPyMISPVersion.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.servers.getPyMISPVersion.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServersServerSettingsKey() {
  return ['servers', '/servers/serverSettings'] as const
}

export function useGetServersServerSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.serverSettings.$get>>>
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
        ? getGetServersServerSettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.servers.serverSettings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.servers.serverSettings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServersServerSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.serverSettings.$get>>>
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
        ? getGetServersServerSettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.servers.serverSettings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.servers.serverSettings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServersGetWorkersKey() {
  return ['servers', '/servers/getWorkers'] as const
}

export function useGetServersGetWorkers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.getWorkers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServersGetWorkersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.getWorkers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.servers.getWorkers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServersGetWorkers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.getWorkers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServersGetWorkersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.getWorkers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.servers.getWorkers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServersStartWorkerWorkerTypeKey() {
  return ['servers', '/servers/startWorker/:workerType', 'POST'] as const
}

export function usePostServersStartWorkerWorkerType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers.startWorker)[':workerType']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.servers.startWorker)[':workerType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServersStartWorkerWorkerTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.servers.startWorker)[':workerType']['$post']> },
      ) => parseResponse(client.servers.startWorker[':workerType'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServersStopWorkerWorkerPidKey() {
  return ['servers', '/servers/stopWorker/:workerPid', 'POST'] as const
}

export function usePostServersStopWorkerWorkerPid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers.stopWorker)[':workerPid']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.servers.stopWorker)[':workerPid']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServersStopWorkerWorkerPidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.servers.stopWorker)[':workerPid']['$post']> },
      ) => parseResponse(client.servers.stopWorker[':workerPid'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServersKillAllWorkersKey() {
  return ['servers', '/servers/killAllWorkers', 'POST'] as const
}

export function usePostServersKillAllWorkers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.killAllWorkers.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServersKillAllWorkersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.servers.killAllWorkers.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServersRestartWorkersKey() {
  return ['servers', '/servers/restartWorkers', 'POST'] as const
}

export function usePostServersRestartWorkers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.restartWorkers.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServersRestartWorkersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.servers.restartWorkers.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServersRestartDeadWorkersKey() {
  return ['servers', '/servers/restartDeadWorkers', 'POST'] as const
}

export function usePostServersRestartDeadWorkers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.restartDeadWorkers.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServersRestartDeadWorkersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.servers.restartDeadWorkers.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServersUpdateKey() {
  return ['servers', '/servers/update', 'POST'] as const
}

export function usePostServersUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.update.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServersUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.servers.update.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServersUpdateJSONKey() {
  return ['servers', '/servers/updateJSON', 'POST'] as const
}

export function usePostServersUpdateJSON<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.updateJSON.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServersUpdateJSONKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.servers.updateJSON.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServersCacheKey() {
  return ['servers', '/servers/cache', 'POST'] as const
}

export function usePostServersCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.cache.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServersCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.servers.cache.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServersCreateSyncKey() {
  return ['servers', '/servers/createSync', 'POST'] as const
}

export function usePostServersCreateSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.createSync.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServersCreateSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.servers.createSync.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServersGetInstanceUUIDKey() {
  return ['servers', '/servers/getInstanceUUID'] as const
}

export function useGetServersGetInstanceUUID<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.getInstanceUUID.$get>>>
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
        ? getGetServersGetInstanceUUIDKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.servers.getInstanceUUID.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.servers.getInstanceUUID.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServersGetInstanceUUID<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.getInstanceUUID.$get>>>
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
        ? getGetServersGetInstanceUUIDKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.servers.getInstanceUUID.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.servers.getInstanceUUID.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServersGetSettingSettingNameKey(
  args: InferRequestType<(typeof client.servers.getSetting)[':settingName']['$get']>,
) {
  return ['servers', '/servers/getSetting/:settingName', args] as const
}

export function useGetServersGetSettingSettingName<TError = unknown>(
  args: InferRequestType<(typeof client.servers.getSetting)[':settingName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers.getSetting)[':settingName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServersGetSettingSettingNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers.getSetting)[':settingName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.servers.getSetting[':settingName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServersGetSettingSettingName<TError = unknown>(
  args: InferRequestType<(typeof client.servers.getSetting)[':settingName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers.getSetting)[':settingName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServersGetSettingSettingNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers.getSetting)[':settingName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.servers.getSetting[':settingName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServersServerSettingsEditSettingNameKey() {
  return ['servers', '/servers/serverSettingsEdit/:settingName', 'POST'] as const
}

export function usePostServersServerSettingsEditSettingName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers.serverSettingsEdit)[':settingName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.servers.serverSettingsEdit)[':settingName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServersServerSettingsEditSettingNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.servers.serverSettingsEdit)[':settingName']['$post']>
        },
      ) =>
        parseResponse(client.servers.serverSettingsEdit[':settingName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostServersImportKey() {
  return ['servers', '/servers/import', 'POST'] as const
}

export function usePostServersImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.servers.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServersImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.servers.import.$post> }) =>
        parseResponse(client.servers.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSharingGroupsAddKey() {
  return ['sharing_groups', '/sharing_groups/add', 'POST'] as const
}

export function usePostSharingGroupsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sharing_groups.add.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sharing_groups.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharingGroupsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sharing_groups.add.$post> }) =>
        parseResponse(client.sharing_groups.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSharingGroupsEditSharingGroupIdKey() {
  return ['sharing_groups', '/sharing_groups/edit/:sharingGroupId', 'POST'] as const
}

export function usePostSharingGroupsEditSharingGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sharing_groups.edit)[':sharingGroupId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sharing_groups.edit)[':sharingGroupId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharingGroupsEditSharingGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sharing_groups.edit)[':sharingGroupId']['$post']>
        },
      ) => parseResponse(client.sharing_groups.edit[':sharingGroupId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSharingGroupsDeleteSharingGroupIdKey() {
  return ['sharing_groups', '/sharing_groups/delete/:sharingGroupId', 'DELETE'] as const
}

export function useDeleteSharingGroupsDeleteSharingGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sharing_groups.delete)[':sharingGroupId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sharing_groups.delete)[':sharingGroupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSharingGroupsDeleteSharingGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sharing_groups.delete)[':sharingGroupId']['$delete']>
        },
      ) =>
        parseResponse(client.sharing_groups.delete[':sharingGroupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSharingGroupsKey() {
  return ['sharing_groups', '/sharing_groups'] as const
}

export function useGetSharingGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sharing_groups.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSharingGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sharing_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sharing_groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSharingGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sharing_groups.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSharingGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sharing_groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sharing_groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSharingGroupsViewSharingGroupIdKey(
  args: InferRequestType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>,
) {
  return ['sharing_groups', '/sharing_groups/view/:sharingGroupId', args] as const
}

export function useGetSharingGroupsViewSharingGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSharingGroupsViewSharingGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sharing_groups.view[':sharingGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSharingGroupsViewSharingGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSharingGroupsViewSharingGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sharing_groups.view[':sharingGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSharingGroupsAddOrgSharingGroupIdOrganisationIdKey() {
  return [
    'sharing_groups',
    '/sharing_groups/addOrg/:sharingGroupId/:organisationId',
    'POST',
  ] as const
}

export function usePostSharingGroupsAddOrgSharingGroupIdOrganisationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sharing_groups.addOrg)[':sharingGroupId'][':organisationId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sharing_groups.addOrg)[':sharingGroupId'][':organisationId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharingGroupsAddOrgSharingGroupIdOrganisationIdKey()
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
            (typeof client.sharing_groups.addOrg)[':sharingGroupId'][':organisationId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sharing_groups.addOrg[':sharingGroupId'][':organisationId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSharingGroupsRemoveOrgSharingGroupIdOrganisationIdKey() {
  return [
    'sharing_groups',
    '/sharing_groups/removeOrg/:sharingGroupId/:organisationId',
    'POST',
  ] as const
}

export function usePostSharingGroupsRemoveOrgSharingGroupIdOrganisationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sharing_groups.removeOrg)[':sharingGroupId'][':organisationId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sharing_groups.removeOrg)[':sharingGroupId'][':organisationId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharingGroupsRemoveOrgSharingGroupIdOrganisationIdKey()
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
            (typeof client.sharing_groups.removeOrg)[':sharingGroupId'][':organisationId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sharing_groups.removeOrg[':sharingGroupId'][':organisationId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSharingGroupsAddServerSharingGroupIdServerIdKey() {
  return ['sharing_groups', '/sharing_groups/addServer/:sharingGroupId/:serverId', 'POST'] as const
}

export function usePostSharingGroupsAddServerSharingGroupIdServerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sharing_groups.addServer)[':sharingGroupId'][':serverId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sharing_groups.addServer)[':sharingGroupId'][':serverId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharingGroupsAddServerSharingGroupIdServerIdKey()
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
            (typeof client.sharing_groups.addServer)[':sharingGroupId'][':serverId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sharing_groups.addServer[':sharingGroupId'][':serverId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSharingGroupsRemoveServerSharingGroupServerIdServerIdKey() {
  return [
    'sharing_groups',
    '/sharing_groups/removeServer/:sharingGroupServerId/:serverId',
    'POST',
  ] as const
}

export function usePostSharingGroupsRemoveServerSharingGroupServerIdServerId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sharing_groups.removeServer)[':sharingGroupServerId'][':serverId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sharing_groups.removeServer)[':sharingGroupServerId'][':serverId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharingGroupsRemoveServerSharingGroupServerIdServerIdKey()
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
            (typeof client.sharing_groups.removeServer)[':sharingGroupServerId'][':serverId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sharing_groups.removeServer[':sharingGroupServerId'][':serverId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSharingGroupBlueprintsAddKey() {
  return ['sharing_group_blueprints', '/sharing_group_blueprints/add', 'POST'] as const
}

export function usePostSharingGroupBlueprintsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sharing_group_blueprints.add.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sharing_group_blueprints.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharingGroupBlueprintsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sharing_group_blueprints.add.$post> },
      ) => parseResponse(client.sharing_group_blueprints.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSharingGroupBlueprintsDeleteSharingGroupBlueprintIdKey() {
  return [
    'sharing_group_blueprints',
    '/sharing_group_blueprints/delete/:sharingGroupBlueprintId',
    'DELETE',
  ] as const
}

export function useDeleteSharingGroupBlueprintsDeleteSharingGroupBlueprintId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sharing_group_blueprints.delete)[':sharingGroupBlueprintId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sharing_group_blueprints.delete)[':sharingGroupBlueprintId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSharingGroupBlueprintsDeleteSharingGroupBlueprintIdKey()
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
            (typeof client.sharing_group_blueprints.delete)[':sharingGroupBlueprintId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sharing_group_blueprints.delete[':sharingGroupBlueprintId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSharingGroupBlueprintsDetachSharingGroupBlueprintIdKey() {
  return [
    'sharing_group_blueprints',
    '/sharing_group_blueprints/detach/:sharingGroupBlueprintId',
    'POST',
  ] as const
}

export function usePostSharingGroupBlueprintsDetachSharingGroupBlueprintId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sharing_group_blueprints.detach)[':sharingGroupBlueprintId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sharing_group_blueprints.detach)[':sharingGroupBlueprintId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharingGroupBlueprintsDetachSharingGroupBlueprintIdKey()
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
            (typeof client.sharing_group_blueprints.detach)[':sharingGroupBlueprintId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sharing_group_blueprints.detach[':sharingGroupBlueprintId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSharingGroupBlueprintsEditSharingGroupBlueprintIdKey() {
  return [
    'sharing_group_blueprints',
    '/sharing_group_blueprints/edit/:sharingGroupBlueprintId',
    'POST',
  ] as const
}

export function usePostSharingGroupBlueprintsEditSharingGroupBlueprintId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sharing_group_blueprints.edit)[':sharingGroupBlueprintId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sharing_group_blueprints.edit)[':sharingGroupBlueprintId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharingGroupBlueprintsEditSharingGroupBlueprintIdKey()
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
            (typeof client.sharing_group_blueprints.edit)[':sharingGroupBlueprintId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sharing_group_blueprints.edit[':sharingGroupBlueprintId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSharingGroupBlueprintsExecuteSharingGroupBlueprintIdKey() {
  return [
    'sharing_group_blueprints',
    '/sharing_group_blueprints/execute/:sharingGroupBlueprintId',
    'POST',
  ] as const
}

export function usePostSharingGroupBlueprintsExecuteSharingGroupBlueprintId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sharing_group_blueprints.execute)[':sharingGroupBlueprintId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sharing_group_blueprints.execute)[':sharingGroupBlueprintId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharingGroupBlueprintsExecuteSharingGroupBlueprintIdKey()
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
            (typeof client.sharing_group_blueprints.execute)[':sharingGroupBlueprintId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sharing_group_blueprints.execute[':sharingGroupBlueprintId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSharingGroupBlueprintsIndexKey() {
  return ['sharing_group_blueprints', '/sharing_group_blueprints/index'] as const
}

export function useGetSharingGroupBlueprintsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sharing_group_blueprints.index.$get>>>
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
        ? getGetSharingGroupBlueprintsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sharing_group_blueprints.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sharing_group_blueprints.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSharingGroupBlueprintsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sharing_group_blueprints.index.$get>>>
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
        ? getGetSharingGroupBlueprintsIndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.sharing_group_blueprints.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sharing_group_blueprints.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSharingGroupBlueprintsViewSharingGroupBlueprintIdKey(
  args: InferRequestType<
    (typeof client.sharing_group_blueprints.view)[':sharingGroupBlueprintId']['$get']
  >,
) {
  return [
    'sharing_group_blueprints',
    '/sharing_group_blueprints/view/:sharingGroupBlueprintId',
    args,
  ] as const
}

export function useGetSharingGroupBlueprintsViewSharingGroupBlueprintId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sharing_group_blueprints.view)[':sharingGroupBlueprintId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sharing_group_blueprints.view)[':sharingGroupBlueprintId']['$get']
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
        ? getGetSharingGroupBlueprintsViewSharingGroupBlueprintIdKey(args)
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
                (typeof client.sharing_group_blueprints.view)[':sharingGroupBlueprintId']['$get']
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
          client.sharing_group_blueprints.view[':sharingGroupBlueprintId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSharingGroupBlueprintsViewSharingGroupBlueprintId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sharing_group_blueprints.view)[':sharingGroupBlueprintId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sharing_group_blueprints.view)[':sharingGroupBlueprintId']['$get']
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
        ? getGetSharingGroupBlueprintsViewSharingGroupBlueprintIdKey(args)
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
                (typeof client.sharing_group_blueprints.view)[':sharingGroupBlueprintId']['$get']
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
          client.sharing_group_blueprints.view[':sharingGroupBlueprintId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdKey(
  args: InferRequestType<
    (typeof client.sharing_group_blueprints.viewOrgs)[':sharingGroupBlueprintId']['$get']
  >,
) {
  return [
    'sharing_group_blueprints',
    '/sharing_group_blueprints/viewOrgs/:sharingGroupBlueprintId',
    args,
  ] as const
}

export function useGetSharingGroupBlueprintsViewOrgsSharingGroupBlueprintId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sharing_group_blueprints.viewOrgs)[':sharingGroupBlueprintId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sharing_group_blueprints.viewOrgs)[':sharingGroupBlueprintId']['$get']
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
        ? getGetSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdKey(args)
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
                (typeof client.sharing_group_blueprints.viewOrgs)[':sharingGroupBlueprintId']['$get']
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
          client.sharing_group_blueprints.viewOrgs[':sharingGroupBlueprintId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSharingGroupBlueprintsViewOrgsSharingGroupBlueprintId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.sharing_group_blueprints.viewOrgs)[':sharingGroupBlueprintId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sharing_group_blueprints.viewOrgs)[':sharingGroupBlueprintId']['$get']
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
        ? getGetSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdKey(args)
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
                (typeof client.sharing_group_blueprints.viewOrgs)[':sharingGroupBlueprintId']['$get']
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
          client.sharing_group_blueprints.viewOrgs[':sharingGroupBlueprintId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetFeedsKey() {
  return ['feeds', '/feeds'] as const
}

export function useGetFeeds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetFeedsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feeds.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeeds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetFeedsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feeds.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeedsViewFeedIdKey(
  args: InferRequestType<(typeof client.feeds.view)[':feedId']['$get']>,
) {
  return ['feeds', '/feeds/view/:feedId', args] as const
}

export function useGetFeedsViewFeedId<TError = unknown>(
  args: InferRequestType<(typeof client.feeds.view)[':feedId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.view)[':feedId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFeedsViewFeedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.view)[':feedId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feeds.view[':feedId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeedsViewFeedId<TError = unknown>(
  args: InferRequestType<(typeof client.feeds.view)[':feedId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.view)[':feedId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFeedsViewFeedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.view)[':feedId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feeds.view[':feedId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFeedsAddKey() {
  return ['feeds', '/feeds/add', 'POST'] as const
}

export function usePostFeedsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.add.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.feeds.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeedsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.feeds.add.$post> }) =>
        parseResponse(client.feeds.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutFeedsEditFeedIdKey() {
  return ['feeds', '/feeds/edit/:feedId', 'PUT'] as const
}

export function usePutFeedsEditFeedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.edit)[':feedId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.feeds.edit)[':feedId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFeedsEditFeedIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.feeds.edit)[':feedId']['$put']> },
      ) => parseResponse(client.feeds.edit[':feedId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFeedsEnableFeedIdKey() {
  return ['feeds', '/feeds/enable/:feedId', 'POST'] as const
}

export function usePostFeedsEnableFeedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.enable)[':feedId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.feeds.enable)[':feedId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeedsEnableFeedIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.feeds.enable)[':feedId']['$post']> },
      ) => parseResponse(client.feeds.enable[':feedId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFeedsDisableFeedIdKey() {
  return ['feeds', '/feeds/disable/:feedId', 'POST'] as const
}

export function usePostFeedsDisableFeedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.disable)[':feedId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.feeds.disable)[':feedId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeedsDisableFeedIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.feeds.disable)[':feedId']['$post']> },
      ) => parseResponse(client.feeds.disable[':feedId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFeedsCacheFeedsCacheFeedsScopeKey() {
  return ['feeds', '/feeds/cacheFeeds/:cacheFeedsScope', 'POST'] as const
}

export function usePostFeedsCacheFeedsCacheFeedsScope<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.feeds.cacheFeeds)[':cacheFeedsScope']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.feeds.cacheFeeds)[':cacheFeedsScope']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeedsCacheFeedsCacheFeedsScopeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.feeds.cacheFeeds)[':cacheFeedsScope']['$post']> },
      ) => parseResponse(client.feeds.cacheFeeds[':cacheFeedsScope'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFeedsFetchFromFeedFeedIdKey() {
  return ['feeds', '/feeds/fetchFromFeed/:feedId', 'POST'] as const
}

export function usePostFeedsFetchFromFeedFeedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.feeds.fetchFromFeed)[':feedId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.feeds.fetchFromFeed)[':feedId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeedsFetchFromFeedFeedIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.feeds.fetchFromFeed)[':feedId']['$post']> },
      ) => parseResponse(client.feeds.fetchFromFeed[':feedId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFeedsFetchFromAllFeedsKey() {
  return ['feeds', '/feeds/fetchFromAllFeeds', 'POST'] as const
}

export function usePostFeedsFetchFromAllFeeds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.feeds.fetchFromAllFeeds.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeedsFetchFromAllFeedsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.feeds.fetchFromAllFeeds.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWarninglistsKey() {
  return ['warninglists', '/warninglists'] as const
}

export function useGetWarninglists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWarninglistsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.warninglists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWarninglists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWarninglistsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.warninglists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWarninglistsKey() {
  return ['warninglists', '/warninglists', 'POST'] as const
}

export function usePostWarninglists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.warninglists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWarninglistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.warninglists.$post> }) =>
        parseResponse(client.warninglists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWarninglistsToggleEnableKey() {
  return ['warninglists', '/warninglists/toggleEnable', 'POST'] as const
}

export function usePostWarninglistsToggleEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.toggleEnable.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.warninglists.toggleEnable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWarninglistsToggleEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.warninglists.toggleEnable.$post> },
      ) => parseResponse(client.warninglists.toggleEnable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWarninglistsViewWarninglistIdKey(
  args: InferRequestType<(typeof client.warninglists.view)[':warninglistId']['$get']>,
) {
  return ['warninglists', '/warninglists/view/:warninglistId', args] as const
}

export function useGetWarninglistsViewWarninglistId<TError = unknown>(
  args: InferRequestType<(typeof client.warninglists.view)[':warninglistId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.warninglists.view)[':warninglistId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWarninglistsViewWarninglistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.warninglists.view)[':warninglistId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.warninglists.view[':warninglistId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWarninglistsViewWarninglistId<TError = unknown>(
  args: InferRequestType<(typeof client.warninglists.view)[':warninglistId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.warninglists.view)[':warninglistId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWarninglistsViewWarninglistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.warninglists.view)[':warninglistId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.warninglists.view[':warninglistId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWarninglistsCheckValueKey() {
  return ['warninglists', '/warninglists/checkValue', 'POST'] as const
}

export function usePostWarninglistsCheckValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.checkValue.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.warninglists.checkValue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWarninglistsCheckValueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.warninglists.checkValue.$post> },
      ) => parseResponse(client.warninglists.checkValue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWarninglistsUpdateKey() {
  return ['warninglists', '/warninglists/update', 'POST'] as const
}

export function usePostWarninglistsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.update.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWarninglistsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.warninglists.update.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNoticelistsKey() {
  return ['noticelists', '/noticelists'] as const
}

export function useGetNoticelists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.noticelists.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNoticelistsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.noticelists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.noticelists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNoticelists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.noticelists.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNoticelistsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.noticelists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.noticelists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNoticelistsViewNoticelistIdKey(
  args: InferRequestType<(typeof client.noticelists.view)[':noticelistId']['$get']>,
) {
  return ['noticelists', '/noticelists/view/:noticelistId', args] as const
}

export function useGetNoticelistsViewNoticelistId<TError = unknown>(
  args: InferRequestType<(typeof client.noticelists.view)[':noticelistId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.noticelists.view)[':noticelistId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNoticelistsViewNoticelistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.noticelists.view)[':noticelistId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.noticelists.view[':noticelistId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNoticelistsViewNoticelistId<TError = unknown>(
  args: InferRequestType<(typeof client.noticelists.view)[':noticelistId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.noticelists.view)[':noticelistId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNoticelistsViewNoticelistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.noticelists.view)[':noticelistId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.noticelists.view[':noticelistId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNoticelistsToggleEnableNoticelistIdKey() {
  return ['noticelists', '/noticelists/toggleEnable/:noticelistId', 'POST'] as const
}

export function usePostNoticelistsToggleEnableNoticelistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.noticelists.toggleEnable)[':noticelistId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.noticelists.toggleEnable)[':noticelistId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNoticelistsToggleEnableNoticelistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.noticelists.toggleEnable)[':noticelistId']['$post']>
        },
      ) =>
        parseResponse(client.noticelists.toggleEnable[':noticelistId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNoticelistsUpdateKey() {
  return ['noticelists', '/noticelists/update', 'POST'] as const
}

export function usePostNoticelistsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.noticelists.update.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNoticelistsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.noticelists.update.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostObjectsRestsearchKey() {
  return ['objects', '/objects/restsearch', 'POST'] as const
}

export function usePostObjectsRestsearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.restsearch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.objects.restsearch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectsRestsearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.objects.restsearch.$post> }) =>
        parseResponse(client.objects.restsearch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostObjectsAddEventIdObjectTemplateIdKey() {
  return ['objects', '/objects/add/:eventId/:objectTemplateId', 'POST'] as const
}

export function usePostObjectsAddEventIdObjectTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.add)[':eventId'][':objectTemplateId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.objects.add)[':eventId'][':objectTemplateId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObjectsAddEventIdObjectTemplateIdKey()
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
            (typeof client.objects.add)[':eventId'][':objectTemplateId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.objects.add[':eventId'][':objectTemplateId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetObjectsViewObjectIdKey(
  args: InferRequestType<(typeof client.objects.view)[':objectId']['$get']>,
) {
  return ['objects', '/objects/view/:objectId', args] as const
}

export function useGetObjectsViewObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.objects.view)[':objectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.view)[':objectId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectsViewObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.view)[':objectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.objects.view[':objectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetObjectsViewObjectId<TError = unknown>(
  args: InferRequestType<(typeof client.objects.view)[':objectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.view)[':objectId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetObjectsViewObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.objects.view)[':objectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.objects.view[':objectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteObjectsDeleteObjectIdHardDeleteKey() {
  return ['objects', '/objects/delete/:objectId/:hardDelete', 'DELETE'] as const
}

export function useDeleteObjectsDeleteObjectIdHardDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.delete)[':objectId'][':hardDelete']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.objects.delete)[':objectId'][':hardDelete']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteObjectsDeleteObjectIdHardDeleteKey()
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
            (typeof client.objects.delete)[':objectId'][':hardDelete']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.objects.delete[':objectId'][':hardDelete'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSightingsIndexEventIdKey(
  args: InferRequestType<(typeof client.sightings.index)[':eventId']['$get']>,
) {
  return ['sightings', '/sightings/index/:eventId', args] as const
}

export function useGetSightingsIndexEventId<TError = unknown>(
  args: InferRequestType<(typeof client.sightings.index)[':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sightings.index)[':eventId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSightingsIndexEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sightings.index)[':eventId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sightings.index[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSightingsIndexEventId<TError = unknown>(
  args: InferRequestType<(typeof client.sightings.index)[':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sightings.index)[':eventId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSightingsIndexEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sightings.index)[':eventId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sightings.index[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSightingsAddKey() {
  return ['sightings', '/sightings/add', 'POST'] as const
}

export function usePostSightingsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sightings.add.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sightings.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSightingsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sightings.add.$post> }) =>
        parseResponse(client.sightings.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSightingsAddAttributeIdKey() {
  return ['sightings', '/sightings/add/:attributeId', 'POST'] as const
}

export function usePostSightingsAddAttributeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sightings.add)[':attributeId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sightings.add)[':attributeId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSightingsAddAttributeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sightings.add)[':attributeId']['$post']> },
      ) => parseResponse(client.sightings.add[':attributeId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSightingsDeleteSightingIdKey() {
  return ['sightings', '/sightings/delete/:sightingId', 'POST'] as const
}

export function usePostSightingsDeleteSightingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sightings.delete)[':sightingId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sightings.delete)[':sightingId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSightingsDeleteSightingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sightings.delete)[':sightingId']['$post']> },
      ) => parseResponse(client.sightings.delete[':sightingId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsKey() {
  return ['tags', '/tags'] as const
}

export function useGetTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsViewTagIdKey(
  args: InferRequestType<(typeof client.tags.view)[':tagId']['$get']>,
) {
  return ['tags', '/tags/view/:tagId', args] as const
}

export function useGetTagsViewTagId<TError = unknown>(
  args: InferRequestType<(typeof client.tags.view)[':tagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags.view)[':tagId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsViewTagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags.view)[':tagId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.view[':tagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsViewTagId<TError = unknown>(
  args: InferRequestType<(typeof client.tags.view)[':tagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags.view)[':tagId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsViewTagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags.view)[':tagId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.view[':tagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsAddKey() {
  return ['tags', '/tags/add', 'POST'] as const
}

export function usePostTagsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.add.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tags.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tags.add.$post> }) =>
        parseResponse(client.tags.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagsDeleteTagIdKey() {
  return ['tags', '/tags/delete/:tagId', 'POST'] as const
}

export function usePostTagsDeleteTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags.delete)[':tagId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags.delete)[':tagId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsDeleteTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags.delete)[':tagId']['$post']> },
      ) => parseResponse(client.tags.delete[':tagId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagsEditTagIdKey() {
  return ['tags', '/tags/edit/:tagId', 'POST'] as const
}

export function usePostTagsEditTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags.edit)[':tagId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags.edit)[':tagId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsEditTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags.edit)[':tagId']['$post']> },
      ) => parseResponse(client.tags.edit[':tagId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsSearchTagSearchTermKey(
  args: InferRequestType<(typeof client.tags.search)[':tagSearchTerm']['$get']>,
) {
  return ['tags', '/tags/search/:tagSearchTerm', args] as const
}

export function useGetTagsSearchTagSearchTerm<TError = unknown>(
  args: InferRequestType<(typeof client.tags.search)[':tagSearchTerm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags.search)[':tagSearchTerm']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsSearchTagSearchTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags.search)[':tagSearchTerm']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.search[':tagSearchTerm'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsSearchTagSearchTerm<TError = unknown>(
  args: InferRequestType<(typeof client.tags.search)[':tagSearchTerm']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags.search)[':tagSearchTerm']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsSearchTagSearchTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags.search)[':tagSearchTerm']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags.search[':tagSearchTerm'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuthKeysKey() {
  return ['auth_keys', '/auth_keys'] as const
}

export function useGetAuthKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth_keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth_keys.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth_keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth_keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth_keys.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth_keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthKeysKey() {
  return ['auth_keys', '/auth_keys', 'POST'] as const
}

export function usePostAuthKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth_keys.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.auth_keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth_keys.$post> }) =>
        parseResponse(client.auth_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthKeysAddUserIdKey() {
  return ['auth_keys', '/auth_keys/add/:userId', 'POST'] as const
}

export function usePostAuthKeysAddUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth_keys.add)[':userId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth_keys.add)[':userId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthKeysAddUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth_keys.add)[':userId']['$post']> },
      ) => parseResponse(client.auth_keys.add[':userId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthKeysViewAuthKeyIdKey(
  args: InferRequestType<(typeof client.auth_keys.view)[':authKeyId']['$get']>,
) {
  return ['auth_keys', '/auth_keys/view/:authKeyId', args] as const
}

export function useGetAuthKeysViewAuthKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.auth_keys.view)[':authKeyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.auth_keys.view)[':authKeyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthKeysViewAuthKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.auth_keys.view)[':authKeyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth_keys.view[':authKeyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthKeysViewAuthKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.auth_keys.view)[':authKeyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.auth_keys.view)[':authKeyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAuthKeysViewAuthKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.auth_keys.view)[':authKeyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth_keys.view[':authKeyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthKeysEditAuthKeyIdKey() {
  return ['auth_keys', '/auth_keys/edit/:authKeyId', 'POST'] as const
}

export function usePostAuthKeysEditAuthKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth_keys.edit)[':authKeyId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth_keys.edit)[':authKeyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthKeysEditAuthKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth_keys.edit)[':authKeyId']['$post']> },
      ) => parseResponse(client.auth_keys.edit[':authKeyId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthKeysDeleteAuthKeyIdKey() {
  return ['auth_keys', '/auth_keys/delete/:authKeyId', 'DELETE'] as const
}

export function useDeleteAuthKeysDeleteAuthKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth_keys.delete)[':authKeyId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth_keys.delete)[':authKeyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthKeysDeleteAuthKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.auth_keys.delete)[':authKeyId']['$delete']> },
      ) => parseResponse(client.auth_keys.delete[':authKeyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserSettingsKey() {
  return ['user_settings', '/user_settings'] as const
}

export function useGetUserSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserSettingsKey() {
  return ['user_settings', '/user_settings', 'POST'] as const
}

export function usePostUserSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_settings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user_settings.$post> }) =>
        parseResponse(client.user_settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserSettingsViewUserSettingIdKey(
  args: InferRequestType<(typeof client.user_settings.view)[':userSettingId']['$get']>,
) {
  return ['user_settings', '/user_settings/view/:userSettingId', args] as const
}

export function useGetUserSettingsViewUserSettingId<TError = unknown>(
  args: InferRequestType<(typeof client.user_settings.view)[':userSettingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_settings.view)[':userSettingId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserSettingsViewUserSettingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_settings.view)[':userSettingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_settings.view[':userSettingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserSettingsViewUserSettingId<TError = unknown>(
  args: InferRequestType<(typeof client.user_settings.view)[':userSettingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_settings.view)[':userSettingId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserSettingsViewUserSettingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_settings.view)[':userSettingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user_settings.view[':userSettingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserSettingsSetSettingUserIdUserSettingNameKey() {
  return ['user_settings', '/user_settings/setSetting/:userId/:userSettingName', 'POST'] as const
}

export function usePostUserSettingsSetSettingUserIdUserSettingName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.user_settings.setSetting)[':userId'][':userSettingName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.user_settings.setSetting)[':userId'][':userSettingName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserSettingsSetSettingUserIdUserSettingNameKey()
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
            (typeof client.user_settings.setSetting)[':userId'][':userSettingName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.user_settings.setSetting[':userId'][':userSettingName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserSettingsGetSettingUserIdUserSettingNameKey(
  args: InferRequestType<
    (typeof client.user_settings.getSetting)[':userId'][':userSettingName']['$get']
  >,
) {
  return ['user_settings', '/user_settings/getSetting/:userId/:userSettingName', args] as const
}

export function useGetUserSettingsGetSettingUserIdUserSettingName<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_settings.getSetting)[':userId'][':userSettingName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_settings.getSetting)[':userId'][':userSettingName']['$get']
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
        ? getGetUserSettingsGetSettingUserIdUserSettingNameKey(args)
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
                (typeof client.user_settings.getSetting)[':userId'][':userSettingName']['$get']
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
          client.user_settings.getSetting[':userId'][':userSettingName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserSettingsGetSettingUserIdUserSettingName<TError = unknown>(
  args: InferRequestType<
    (typeof client.user_settings.getSetting)[':userId'][':userSettingName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user_settings.getSetting)[':userId'][':userSettingName']['$get']
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
        ? getGetUserSettingsGetSettingUserIdUserSettingNameKey(args)
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
                (typeof client.user_settings.getSetting)[':userId'][':userSettingName']['$get']
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
          client.user_settings.getSetting[':userId'][':userSettingName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserSettingsDeleteUserSettingIdKey() {
  return ['user_settings', '/user_settings/delete/:userSettingId', 'DELETE'] as const
}

export function useDeleteUserSettingsDeleteUserSettingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_settings.delete)[':userSettingId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user_settings.delete)[':userSettingId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserSettingsDeleteUserSettingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.user_settings.delete)[':userSettingId']['$delete']>
        },
      ) => parseResponse(client.user_settings.delete[':userSettingId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaxonomiesKey() {
  return ['taxonomies', '/taxonomies'] as const
}

export function useGetTaxonomies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaxonomiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxonomies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxonomies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaxonomiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxonomies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaxonomiesViewTaxonomyIdKey(
  args: InferRequestType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>,
) {
  return ['taxonomies', '/taxonomies/view/:taxonomyId', args] as const
}

export function useGetTaxonomiesViewTaxonomyId<TError = unknown>(
  args: InferRequestType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaxonomiesViewTaxonomyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxonomies.view[':taxonomyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxonomiesViewTaxonomyId<TError = unknown>(
  args: InferRequestType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaxonomiesViewTaxonomyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxonomies.view[':taxonomyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTaxonomiesEnableTaxonomyIdKey() {
  return ['taxonomies', '/taxonomies/enable/:taxonomyId', 'POST'] as const
}

export function usePostTaxonomiesEnableTaxonomyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.taxonomies.enable)[':taxonomyId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.taxonomies.enable)[':taxonomyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaxonomiesEnableTaxonomyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.taxonomies.enable)[':taxonomyId']['$post']> },
      ) => parseResponse(client.taxonomies.enable[':taxonomyId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTaxonomiesDisableTaxonomyIdKey() {
  return ['taxonomies', '/taxonomies/disable/:taxonomyId', 'POST'] as const
}

export function usePostTaxonomiesDisableTaxonomyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.taxonomies.disable)[':taxonomyId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.taxonomies.disable)[':taxonomyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaxonomiesDisableTaxonomyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.taxonomies.disable)[':taxonomyId']['$post']> },
      ) => parseResponse(client.taxonomies.disable[':taxonomyId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTaxonomiesUpdateKey() {
  return ['taxonomies', '/taxonomies/update', 'POST'] as const
}

export function usePostTaxonomiesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.update.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaxonomiesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.taxonomies.update.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaxonomiesTaxonomyTagsTaxonomyIdKey(
  args: InferRequestType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>,
) {
  return ['taxonomies', '/taxonomies/taxonomy_tags/:taxonomyId', args] as const
}

export function useGetTaxonomiesTaxonomyTagsTaxonomyId<TError = unknown>(
  args: InferRequestType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaxonomiesTaxonomyTagsTaxonomyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.taxonomies.taxonomy_tags[':taxonomyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxonomiesTaxonomyTagsTaxonomyId<TError = unknown>(
  args: InferRequestType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaxonomiesTaxonomyTagsTaxonomyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.taxonomies.taxonomy_tags[':taxonomyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTaxonomiesExportTaxonomyIdKey(
  args: InferRequestType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>,
) {
  return ['taxonomies', '/taxonomies/export/:taxonomyId', args] as const
}

export function useGetTaxonomiesExportTaxonomyId<TError = unknown>(
  args: InferRequestType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaxonomiesExportTaxonomyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxonomies.export[':taxonomyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxonomiesExportTaxonomyId<TError = unknown>(
  args: InferRequestType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaxonomiesExportTaxonomyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.taxonomies.export[':taxonomyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
