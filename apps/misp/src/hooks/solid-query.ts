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

export function getPostAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectTypeMutationKey() {
  return [
    'analystData',
    '/analystData/add/:analystType/:analystObjectUUID/:analystObjectType',
    'POST',
  ] as const
}

export function getPostAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.analystData.add)[':analystType'][':analystObjectUUID'][':analystObjectType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.analystData.add)[':analystType'][':analystObjectUUID'][':analystObjectType']['$post']
      >,
    ) {
      return parseResponse(
        client.analystData.add[':analystType'][':analystObjectUUID'][':analystObjectType'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectType<
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
                    (typeof client.analystData.add)[':analystType'][':analystObjectUUID'][':analystObjectType']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.analystData.add)[':analystType'][':analystObjectUUID'][':analystObjectType']['$post']
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
    const mutationDefaults =
      getPostAnalystDataAddAnalystTypeAnalystObjectUUIDAnalystObjectTypeMutationOptions<
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

export function getPostAnalystDataEditAnalystTypeAnalystDataIDMutationKey() {
  return ['analystData', '/analystData/edit/:analystType/:analystDataID', 'POST'] as const
}

export function getPostAnalystDataEditAnalystTypeAnalystDataIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.analystData.edit)[':analystType'][':analystDataID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnalystDataEditAnalystTypeAnalystDataIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.analystData.edit)[':analystType'][':analystDataID']['$post']
      >,
    ) {
      return parseResponse(
        client.analystData.edit[':analystType'][':analystDataID'].$post(args, options),
      )
    },
  })
}

export function createPostAnalystDataEditAnalystTypeAnalystDataID<
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
                    (typeof client.analystData.edit)[':analystType'][':analystDataID']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.analystData.edit)[':analystType'][':analystDataID']['$post']
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
    const mutationDefaults = getPostAnalystDataEditAnalystTypeAnalystDataIDMutationOptions<
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

export function getDeleteAnalystDataDeleteAnalystTypeAnalystDataIDMutationKey() {
  return ['analystData', '/analystData/delete/:analystType/:analystDataID', 'DELETE'] as const
}

export function getDeleteAnalystDataDeleteAnalystTypeAnalystDataIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.analystData.delete)[':analystType'][':analystDataID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAnalystDataDeleteAnalystTypeAnalystDataIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.analystData.delete)[':analystType'][':analystDataID']['$delete']
      >,
    ) {
      return parseResponse(
        client.analystData.delete[':analystType'][':analystDataID'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAnalystDataDeleteAnalystTypeAnalystDataID<
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
                    (typeof client.analystData.delete)[':analystType'][':analystDataID']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.analystData.delete)[':analystType'][':analystDataID']['$delete']
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
    const mutationDefaults = getDeleteAnalystDataDeleteAnalystTypeAnalystDataIDMutationOptions<
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

export function getAnalystDataIndexAnalystTypeQueryKey(
  args: InferRequestType<(typeof client.analystData.index)[':analystType']['$get']>,
) {
  return ['analystData', '/analystData/index/:analystType', args] as const
}

export function getAnalystDataIndexAnalystTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analystData.index)[':analystType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analystData.index)[':analystType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analystData.index)[':analystType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalystDataIndexAnalystTypeQueryKey>
  >({
    queryKey: getAnalystDataIndexAnalystTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analystData.index[':analystType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalystDataIndexAnalystType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analystData.index)[':analystType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.analystData.index)[':analystType']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analystData.index)[':analystType']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalystDataIndexAnalystTypeQueryKey>
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
      ...getAnalystDataIndexAnalystTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAnalystDataViewAnalystTypeAnalystDataIDQueryKey(
  args: InferRequestType<
    (typeof client.analystData.view)[':analystType'][':analystDataID']['$get']
  >,
) {
  return ['analystData', '/analystData/view/:analystType/:analystDataID', args] as const
}

export function getAnalystDataViewAnalystTypeAnalystDataIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.analystData.view)[':analystType'][':analystDataID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analystData.view)[':analystType'][':analystDataID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.analystData.view)[':analystType'][':analystDataID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalystDataViewAnalystTypeAnalystDataIDQueryKey>
  >({
    queryKey: getAnalystDataViewAnalystTypeAnalystDataIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analystData.view[':analystType'][':analystDataID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalystDataViewAnalystTypeAnalystDataID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.analystData.view)[':analystType'][':analystDataID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.analystData.view)[':analystType'][':analystDataID']['$get']
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
                    (typeof client.analystData.view)[':analystType'][':analystDataID']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalystDataViewAnalystTypeAnalystDataIDQueryKey>
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
      ...getAnalystDataViewAnalystTypeAnalystDataIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostAnalystDataIndexMinimalMutationKey() {
  return ['analystData', '/analystData/indexMinimal', 'POST'] as const
}

export function getPostAnalystDataIndexMinimalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.analystData.indexMinimal.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.analystData.indexMinimal.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnalystDataIndexMinimalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.analystData.indexMinimal.$post>) {
      return parseResponse(client.analystData.indexMinimal.$post(args, options))
    },
  })
}

export function createPostAnalystDataIndexMinimal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.analystData.indexMinimal.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.analystData.indexMinimal.$post>,
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
    const mutationDefaults = getPostAnalystDataIndexMinimalMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAttributesRestSearchMutationKey() {
  return ['attributes', '/attributes/restSearch', 'POST'] as const
}

export function getPostAttributesRestSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.attributes.restSearch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.attributes.restSearch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributesRestSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.attributes.restSearch.$post>) {
      return parseResponse(client.attributes.restSearch.$post(args, options))
    },
  })
}

export function createPostAttributesRestSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.attributes.restSearch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.attributes.restSearch.$post>,
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
    const mutationDefaults = getPostAttributesRestSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAttributesAddEventIdMutationKey() {
  return ['attributes', '/attributes/add/:eventId', 'POST'] as const
}

export function getPostAttributesAddEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attributes.add)[':eventId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attributes.add)[':eventId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributesAddEventIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.attributes.add)[':eventId']['$post']>) {
      return parseResponse(client.attributes.add[':eventId'].$post(args, options))
    },
  })
}

export function createPostAttributesAddEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attributes.add)[':eventId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.attributes.add)[':eventId']['$post']>,
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
    const mutationDefaults = getPostAttributesAddEventIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutAttributesEditAttributeIdMutationKey() {
  return ['attributes', '/attributes/edit/:attributeId', 'PUT'] as const
}

export function getPutAttributesEditAttributeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attributes.edit)[':attributeId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attributes.edit)[':attributeId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAttributesEditAttributeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attributes.edit)[':attributeId']['$put']>,
    ) {
      return parseResponse(client.attributes.edit[':attributeId'].$put(args, options))
    },
  })
}

export function createPutAttributesEditAttributeId<
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
                Awaited<ReturnType<(typeof client.attributes.edit)[':attributeId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.attributes.edit)[':attributeId']['$put']>,
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
    const mutationDefaults = getPutAttributesEditAttributeIdMutationOptions<
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

export function getDeleteAttributesDeleteAttributeIdMutationKey() {
  return ['attributes', '/attributes/delete/:attributeId', 'DELETE'] as const
}

export function getDeleteAttributesDeleteAttributeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attributes.delete)[':attributeId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attributes.delete)[':attributeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttributesDeleteAttributeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attributes.delete)[':attributeId']['$delete']>,
    ) {
      return parseResponse(client.attributes.delete[':attributeId'].$delete(args, options))
    },
  })
}

export function createDeleteAttributesDeleteAttributeId<
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
                Awaited<ReturnType<(typeof client.attributes.delete)[':attributeId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.attributes.delete)[':attributeId']['$delete']>,
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
    const mutationDefaults = getDeleteAttributesDeleteAttributeIdMutationOptions<
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

export function getPostAttributesRestoreAttributeIdMutationKey() {
  return ['attributes', '/attributes/restore/:attributeId', 'POST'] as const
}

export function getPostAttributesRestoreAttributeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attributes.restore)[':attributeId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attributes.restore)[':attributeId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributesRestoreAttributeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attributes.restore)[':attributeId']['$post']>,
    ) {
      return parseResponse(client.attributes.restore[':attributeId'].$post(args, options))
    },
  })
}

export function createPostAttributesRestoreAttributeId<
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
                Awaited<ReturnType<(typeof client.attributes.restore)[':attributeId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.attributes.restore)[':attributeId']['$post']>,
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
    const mutationDefaults = getPostAttributesRestoreAttributeIdMutationOptions<
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

export function getPostAttributesAddTagAttributeIdTagIdLocalLocalMutationKey() {
  return ['attributes', '/attributes/addTag/:attributeId/:tagId/local:{local}', 'POST'] as const
}

export function getPostAttributesAddTagAttributeIdTagIdLocalLocalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.attributes.addTag)[':attributeId'][':tagId']['local:{local}']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAttributesAddTagAttributeIdTagIdLocalLocalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.attributes.addTag)[':attributeId'][':tagId']['local:{local}']['$post']
      >,
    ) {
      return parseResponse(
        client.attributes.addTag[':attributeId'][':tagId']['local:{local}'].$post(args, options),
      )
    },
  })
}

export function createPostAttributesAddTagAttributeIdTagIdLocalLocal<
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
                    (typeof client.attributes.addTag)[':attributeId'][':tagId']['local:{local}']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.attributes.addTag)[':attributeId'][':tagId']['local:{local}']['$post']
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
    const mutationDefaults = getPostAttributesAddTagAttributeIdTagIdLocalLocalMutationOptions<
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

export function getPostAttributesRemoveTagAttributeIdTagIdMutationKey() {
  return ['attributes', '/attributes/removeTag/:attributeId/:tagId', 'POST'] as const
}

export function getPostAttributesRemoveTagAttributeIdTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.attributes.removeTag)[':attributeId'][':tagId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributesRemoveTagAttributeIdTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.attributes.removeTag)[':attributeId'][':tagId']['$post']
      >,
    ) {
      return parseResponse(
        client.attributes.removeTag[':attributeId'][':tagId'].$post(args, options),
      )
    },
  })
}

export function createPostAttributesRemoveTagAttributeIdTagId<
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
                    (typeof client.attributes.removeTag)[':attributeId'][':tagId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.attributes.removeTag)[':attributeId'][':tagId']['$post']>,
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
    const mutationDefaults = getPostAttributesRemoveTagAttributeIdTagIdMutationOptions<
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

export function getAttributesQueryKey() {
  return ['attributes', '/attributes'] as const
}

export function getAttributesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attributes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attributes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAttributesQueryKey>
  >({
    queryKey: getAttributesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.attributes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAttributes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attributes.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAttributesQueryKey>
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
    return { ...getAttributesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAttributesViewAttributeIdQueryKey(
  args: InferRequestType<(typeof client.attributes.view)[':attributeId']['$get']>,
) {
  return ['attributes', '/attributes/view/:attributeId', args] as const
}

export function getAttributesViewAttributeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.attributes.view)[':attributeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attributes.view)[':attributeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attributes.view)[':attributeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributesViewAttributeIdQueryKey>
  >({
    queryKey: getAttributesViewAttributeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.attributes.view[':attributeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAttributesViewAttributeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.attributes.view)[':attributeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.attributes.view)[':attributeId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.attributes.view)[':attributeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAttributesViewAttributeIdQueryKey>
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
      ...getAttributesViewAttributeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAttributesGetAttributeByB64ValueBase64ValueQueryKey(
  args: InferRequestType<(typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']>,
) {
  return ['attributes', '/attributes/getAttributeByB64Value/:base64Value', args] as const
}

export function getAttributesGetAttributeByB64ValueBase64ValueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributesGetAttributeByB64ValueBase64ValueQueryKey>
  >({
    queryKey: getAttributesGetAttributeByB64ValueBase64ValueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.attributes.getAttributeByB64Value[':base64Value'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAttributesGetAttributeByB64ValueBase64Value<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']
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
                    (typeof client.attributes.getAttributeByB64Value)[':base64Value']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAttributesGetAttributeByB64ValueBase64ValueQueryKey>
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
      ...getAttributesGetAttributeByB64ValueBase64ValueQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAttributesAttributeStatisticsContextPercentageQueryKey(
  args: InferRequestType<
    (typeof client.attributes.attributeStatistics)[':context'][':percentage']['$get']
  >,
) {
  return ['attributes', '/attributes/attributeStatistics/:context/:percentage', args] as const
}

export function getAttributesAttributeStatisticsContextPercentageQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.attributes.attributeStatistics)[':context'][':percentage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAttributesAttributeStatisticsContextPercentageQueryKey>
  >({
    queryKey: getAttributesAttributeStatisticsContextPercentageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.attributes.attributeStatistics[':context'][':percentage'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAttributesAttributeStatisticsContextPercentage<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.attributes.attributeStatistics)[':context'][':percentage']['$get']
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
                    (typeof client.attributes.attributeStatistics)[':context'][':percentage']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAttributesAttributeStatisticsContextPercentageQueryKey>
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
      ...getAttributesAttributeStatisticsContextPercentageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAttributesDescribeTypesQueryKey() {
  return ['attributes', '/attributes/describeTypes'] as const
}

export function getAttributesDescribeTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.attributes.describeTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.attributes.describeTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttributesDescribeTypesQueryKey>
  >({
    queryKey: getAttributesDescribeTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.attributes.describeTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAttributesDescribeTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.attributes.describeTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.attributes.describeTypes.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAttributesDescribeTypesQueryKey>
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
    return { ...getAttributesDescribeTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAttributesEnrichAttributeIdMutationKey() {
  return ['attributes', '/attributes/enrich/:attributeId', 'POST'] as const
}

export function getPostAttributesEnrichAttributeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.attributes.enrich)[':attributeId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.attributes.enrich)[':attributeId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAttributesEnrichAttributeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.attributes.enrich)[':attributeId']['$post']>,
    ) {
      return parseResponse(client.attributes.enrich[':attributeId'].$post(args, options))
    },
  })
}

export function createPostAttributesEnrichAttributeId<
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
                Awaited<ReturnType<(typeof client.attributes.enrich)[':attributeId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.attributes.enrich)[':attributeId']['$post']>,
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
    const mutationDefaults = getPostAttributesEnrichAttributeIdMutationOptions<
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

export function getPostCollectionsAddMutationKey() {
  return ['collections', '/collections/add', 'POST'] as const
}

export function getPostCollectionsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.collections.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collections.add.$post>) {
      return parseResponse(client.collections.add.$post(args, options))
    },
  })
}

export function createPostCollectionsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.collections.add.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.collections.add.$post>,
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
    const mutationDefaults = getPostCollectionsAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCollectionsEditCollectionIdMutationKey() {
  return ['collections', '/collections/edit/:collectionId', 'POST'] as const
}

export function getPostCollectionsEditCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections.edit)[':collectionId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections.edit)[':collectionId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsEditCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections.edit)[':collectionId']['$post']>,
    ) {
      return parseResponse(client.collections.edit[':collectionId'].$post(args, options))
    },
  })
}

export function createPostCollectionsEditCollectionId<
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
                Awaited<ReturnType<(typeof client.collections.edit)[':collectionId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections.edit)[':collectionId']['$post']>,
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
    const mutationDefaults = getPostCollectionsEditCollectionIdMutationOptions<
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

export function getDeleteCollectionsDeleteCollectionIdMutationKey() {
  return ['collections', '/collections/delete/:collectionId', 'DELETE'] as const
}

export function getDeleteCollectionsDeleteCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections.delete)[':collectionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections.delete)[':collectionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsDeleteCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections.delete)[':collectionId']['$delete']>,
    ) {
      return parseResponse(client.collections.delete[':collectionId'].$delete(args, options))
    },
  })
}

export function createDeleteCollectionsDeleteCollectionId<
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
                Awaited<ReturnType<(typeof client.collections.delete)[':collectionId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections.delete)[':collectionId']['$delete']>,
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
    const mutationDefaults = getDeleteCollectionsDeleteCollectionIdMutationOptions<
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

export function getCollectionsViewCollectionIdQueryKey(
  args: InferRequestType<(typeof client.collections.view)[':collectionId']['$get']>,
) {
  return ['collections', '/collections/view/:collectionId', args] as const
}

export function getCollectionsViewCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections.view)[':collectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections.view)[':collectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections.view)[':collectionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsViewCollectionIdQueryKey>
  >({
    queryKey: getCollectionsViewCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections.view[':collectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsViewCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections.view)[':collectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collections.view)[':collectionId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections.view)[':collectionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCollectionsViewCollectionIdQueryKey>
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
      ...getCollectionsViewCollectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCollectionsIndexFilterMutationKey() {
  return ['collections', '/collections/index/:filter', 'POST'] as const
}

export function getPostCollectionsIndexFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections.index)[':filter']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections.index)[':filter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsIndexFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections.index)[':filter']['$post']>,
    ) {
      return parseResponse(client.collections.index[':filter'].$post(args, options))
    },
  })
}

export function createPostCollectionsIndexFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections.index)[':filter']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.collections.index)[':filter']['$post']>,
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
    const mutationDefaults = getPostCollectionsIndexFilterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventReportsViewEventReportIdQueryKey(
  args: InferRequestType<(typeof client.eventReports.view)[':eventReportId']['$get']>,
) {
  return ['eventReports', '/eventReports/view/:eventReportId', args] as const
}

export function getEventReportsViewEventReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eventReports.view)[':eventReportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eventReports.view)[':eventReportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eventReports.view)[':eventReportId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventReportsViewEventReportIdQueryKey>
  >({
    queryKey: getEventReportsViewEventReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eventReports.view[':eventReportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventReportsViewEventReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.eventReports.view)[':eventReportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.eventReports.view)[':eventReportId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eventReports.view)[':eventReportId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventReportsViewEventReportIdQueryKey>
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
      ...getEventReportsViewEventReportIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostEventReportsAddEventIdMutationKey() {
  return ['eventReports', '/eventReports/add/:eventId', 'POST'] as const
}

export function getPostEventReportsAddEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eventReports.add)[':eventId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eventReports.add)[':eventId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventReportsAddEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eventReports.add)[':eventId']['$post']>,
    ) {
      return parseResponse(client.eventReports.add[':eventId'].$post(args, options))
    },
  })
}

export function createPostEventReportsAddEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eventReports.add)[':eventId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eventReports.add)[':eventId']['$post']>,
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
    const mutationDefaults = getPostEventReportsAddEventIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEventReportsEditEventReportIdMutationKey() {
  return ['eventReports', '/eventReports/edit/:eventReportId', 'POST'] as const
}

export function getPostEventReportsEditEventReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eventReports.edit)[':eventReportId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eventReports.edit)[':eventReportId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventReportsEditEventReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eventReports.edit)[':eventReportId']['$post']>,
    ) {
      return parseResponse(client.eventReports.edit[':eventReportId'].$post(args, options))
    },
  })
}

export function createPostEventReportsEditEventReportId<
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
                Awaited<ReturnType<(typeof client.eventReports.edit)[':eventReportId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eventReports.edit)[':eventReportId']['$post']>,
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
    const mutationDefaults = getPostEventReportsEditEventReportIdMutationOptions<
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

export function getPostEventReportsDeleteEventReportIdMutationKey() {
  return ['eventReports', '/eventReports/delete/:eventReportId', 'POST'] as const
}

export function getPostEventReportsDeleteEventReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eventReports.delete)[':eventReportId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eventReports.delete)[':eventReportId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventReportsDeleteEventReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eventReports.delete)[':eventReportId']['$post']>,
    ) {
      return parseResponse(client.eventReports.delete[':eventReportId'].$post(args, options))
    },
  })
}

export function createPostEventReportsDeleteEventReportId<
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
                Awaited<ReturnType<(typeof client.eventReports.delete)[':eventReportId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eventReports.delete)[':eventReportId']['$post']>,
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
    const mutationDefaults = getPostEventReportsDeleteEventReportIdMutationOptions<
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

export function getPostEventReportsDeleteEventReportIdHardDeleteMutationKey() {
  return ['eventReports', '/eventReports/delete/:eventReportId/:hardDelete', 'POST'] as const
}

export function getPostEventReportsDeleteEventReportIdHardDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.eventReports.delete)[':eventReportId'][':hardDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventReportsDeleteEventReportIdHardDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.eventReports.delete)[':eventReportId'][':hardDelete']['$post']
      >,
    ) {
      return parseResponse(
        client.eventReports.delete[':eventReportId'][':hardDelete'].$post(args, options),
      )
    },
  })
}

export function createPostEventReportsDeleteEventReportIdHardDelete<
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
                    (typeof client.eventReports.delete)[':eventReportId'][':hardDelete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.eventReports.delete)[':eventReportId'][':hardDelete']['$post']
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
    const mutationDefaults = getPostEventReportsDeleteEventReportIdHardDeleteMutationOptions<
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

export function getPostEventReportsRestoreEventReportIdMutationKey() {
  return ['eventReports', '/eventReports/restore/:eventReportId', 'POST'] as const
}

export function getPostEventReportsRestoreEventReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eventReports.restore)[':eventReportId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eventReports.restore)[':eventReportId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventReportsRestoreEventReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eventReports.restore)[':eventReportId']['$post']>,
    ) {
      return parseResponse(client.eventReports.restore[':eventReportId'].$post(args, options))
    },
  })
}

export function createPostEventReportsRestoreEventReportId<
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
                Awaited<ReturnType<(typeof client.eventReports.restore)[':eventReportId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eventReports.restore)[':eventReportId']['$post']>,
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
    const mutationDefaults = getPostEventReportsRestoreEventReportIdMutationOptions<
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

export function getEventReportsIndexQueryKey() {
  return ['eventReports', '/eventReports/index'] as const
}

export function getEventReportsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventReports.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventReports.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventReportsIndexQueryKey>
  >({
    queryKey: getEventReportsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.eventReports.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventReportsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventReports.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.eventReports.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventReportsIndexQueryKey>
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
    return { ...getEventReportsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostEventReportsImportReportFromUrlEventIdMutationKey() {
  return ['eventReports', '/eventReports/importReportFromUrl/:eventId', 'POST'] as const
}

export function getPostEventReportsImportReportFromUrlEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.eventReports.importReportFromUrl)[':eventId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.eventReports.importReportFromUrl)[':eventId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventReportsImportReportFromUrlEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.eventReports.importReportFromUrl)[':eventId']['$post']>,
    ) {
      return parseResponse(client.eventReports.importReportFromUrl[':eventId'].$post(args, options))
    },
  })
}

export function createPostEventReportsImportReportFromUrlEventId<
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
                  ReturnType<(typeof client.eventReports.importReportFromUrl)[':eventId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.eventReports.importReportFromUrl)[':eventId']['$post']>,
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
    const mutationDefaults = getPostEventReportsImportReportFromUrlEventIdMutationOptions<
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

export function getPostEventsRestSearchMutationKey() {
  return ['events', '/events/restSearch', 'POST'] as const
}

export function getPostEventsRestSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.restSearch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.events.restSearch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsRestSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.restSearch.$post>) {
      return parseResponse(client.events.restSearch.$post(args, options))
    },
  })
}

export function createPostEventsRestSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.restSearch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.events.restSearch.$post>,
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
    const mutationDefaults = getPostEventsRestSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEventsAddMutationKey() {
  return ['events', '/events/add', 'POST'] as const
}

export function getPostEventsAddMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.add.$post>>>>>,
    TError,
    InferRequestType<typeof client.events.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.add.$post>) {
      return parseResponse(client.events.add.$post(args, options))
    },
  })
}

export function createPostEventsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.add.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.events.add.$post>,
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
    const mutationDefaults = getPostEventsAddMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutEventsEditEventIdMutationKey() {
  return ['events', '/events/edit/:eventId', 'PUT'] as const
}

export function getPutEventsEditEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events.edit)[':eventId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.events.edit)[':eventId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEventsEditEventIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.events.edit)[':eventId']['$put']>) {
      return parseResponse(client.events.edit[':eventId'].$put(args, options))
    },
  })
}

export function createPutEventsEditEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events.edit)[':eventId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events.edit)[':eventId']['$put']>,
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
    const mutationDefaults = getPutEventsEditEventIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteEventsDeleteEventIdMutationKey() {
  return ['events', '/events/delete/:eventId', 'DELETE'] as const
}

export function getDeleteEventsDeleteEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.delete)[':eventId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events.delete)[':eventId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEventsDeleteEventIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.events.delete)[':eventId']['$delete']>) {
      return parseResponse(client.events.delete[':eventId'].$delete(args, options))
    },
  })
}

export function createDeleteEventsDeleteEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events.delete)[':eventId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events.delete)[':eventId']['$delete']>,
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
    const mutationDefaults = getDeleteEventsDeleteEventIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventsQueryKey() {
  return ['events', '/events'] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getEventsQueryKey>
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
    return { ...getEventsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostEventsIndexMutationKey() {
  return ['events', '/events/index', 'POST'] as const
}

export function getPostEventsIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.events.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.index.$post>) {
      return parseResponse(client.events.index.$post(args, options))
    },
  })
}

export function createPostEventsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.events.index.$post>,
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
    const mutationDefaults = getPostEventsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventsViewEventIdQueryKey(
  args: InferRequestType<(typeof client.events.view)[':eventId']['$get']>,
) {
  return ['events', '/events/view/:eventId', args] as const
}

export function getEventsViewEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events.view)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events.view)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events.view)[':eventId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsViewEventIdQueryKey>
  >({
    queryKey: getEventsViewEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.view[':eventId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsViewEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events.view)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events.view)[':eventId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events.view)[':eventId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsViewEventIdQueryKey>
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
    return { ...getEventsViewEventIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostEventsPublishEventIdMutationKey() {
  return ['events', '/events/publish/:eventId', 'POST'] as const
}

export function getPostEventsPublishEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.publish)[':eventId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events.publish)[':eventId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsPublishEventIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.events.publish)[':eventId']['$post']>) {
      return parseResponse(client.events.publish[':eventId'].$post(args, options))
    },
  })
}

export function createPostEventsPublishEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events.publish)[':eventId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events.publish)[':eventId']['$post']>,
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
    const mutationDefaults = getPostEventsPublishEventIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEventsUnpublishEventIdMutationKey() {
  return ['events', '/events/unpublish/:eventId', 'POST'] as const
}

export function getPostEventsUnpublishEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.unpublish)[':eventId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events.unpublish)[':eventId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsUnpublishEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events.unpublish)[':eventId']['$post']>,
    ) {
      return parseResponse(client.events.unpublish[':eventId'].$post(args, options))
    },
  })
}

export function createPostEventsUnpublishEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events.unpublish)[':eventId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events.unpublish)[':eventId']['$post']>,
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
    const mutationDefaults = getPostEventsUnpublishEventIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEventsAddTagEventIdTagIdLocalLocalMutationKey() {
  return ['events', '/events/addTag/:eventId/:tagId/local:{local}', 'POST'] as const
}

export function getPostEventsAddTagEventIdTagIdLocalLocalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.events.addTag)[':eventId'][':tagId']['local:{local}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsAddTagEventIdTagIdLocalLocalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.events.addTag)[':eventId'][':tagId']['local:{local}']['$post']
      >,
    ) {
      return parseResponse(
        client.events.addTag[':eventId'][':tagId']['local:{local}'].$post(args, options),
      )
    },
  })
}

export function createPostEventsAddTagEventIdTagIdLocalLocal<
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
                    (typeof client.events.addTag)[':eventId'][':tagId']['local:{local}']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.events.addTag)[':eventId'][':tagId']['local:{local}']['$post']
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
    const mutationDefaults = getPostEventsAddTagEventIdTagIdLocalLocalMutationOptions<
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

export function getPostEventsRemoveTagEventIdTagIdMutationKey() {
  return ['events', '/events/removeTag/:eventId/:tagId', 'POST'] as const
}

export function getPostEventsRemoveTagEventIdTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.removeTag)[':eventId'][':tagId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events.removeTag)[':eventId'][':tagId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsRemoveTagEventIdTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events.removeTag)[':eventId'][':tagId']['$post']>,
    ) {
      return parseResponse(client.events.removeTag[':eventId'][':tagId'].$post(args, options))
    },
  })
}

export function createPostEventsRemoveTagEventIdTagId<
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
                Awaited<ReturnType<(typeof client.events.removeTag)[':eventId'][':tagId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events.removeTag)[':eventId'][':tagId']['$post']>,
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
    const mutationDefaults = getPostEventsRemoveTagEventIdTagIdMutationOptions<
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

export function getPostEventsEnrichEventEventIdMutationKey() {
  return ['events', '/events/enrichEvent/:eventId', 'POST'] as const
}

export function getPostEventsEnrichEventEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.enrichEvent)[':eventId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events.enrichEvent)[':eventId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsEnrichEventEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events.enrichEvent)[':eventId']['$post']>,
    ) {
      return parseResponse(client.events.enrichEvent[':eventId'].$post(args, options))
    },
  })
}

export function createPostEventsEnrichEventEventId<
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
                Awaited<ReturnType<(typeof client.events.enrichEvent)[':eventId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events.enrichEvent)[':eventId']['$post']>,
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
    const mutationDefaults = getPostEventsEnrichEventEventIdMutationOptions<
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

export function getGalaxiesQueryKey() {
  return ['galaxies', '/galaxies'] as const
}

export function getGalaxiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGalaxiesQueryKey>
  >({
    queryKey: getGalaxiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.galaxies.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGalaxies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGalaxiesQueryKey>
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
    return { ...getGalaxiesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostGalaxiesMutationKey() {
  return ['galaxies', '/galaxies', 'POST'] as const
}

export function getPostGalaxiesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.$post>>>>>,
    TError,
    InferRequestType<typeof client.galaxies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGalaxiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.galaxies.$post>) {
      return parseResponse(client.galaxies.$post(args, options))
    },
  })
}

export function createPostGalaxies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.galaxies.$post>,
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
    const mutationDefaults = getPostGalaxiesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGalaxiesViewGalaxyIdQueryKey(
  args: InferRequestType<(typeof client.galaxies.view)[':galaxyId']['$get']>,
) {
  return ['galaxies', '/galaxies/view/:galaxyId', args] as const
}

export function getGalaxiesViewGalaxyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.galaxies.view)[':galaxyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.galaxies.view)[':galaxyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxies.view)[':galaxyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGalaxiesViewGalaxyIdQueryKey>
  >({
    queryKey: getGalaxiesViewGalaxyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.galaxies.view[':galaxyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGalaxiesViewGalaxyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.galaxies.view)[':galaxyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.galaxies.view)[':galaxyId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.galaxies.view)[':galaxyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGalaxiesViewGalaxyIdQueryKey>
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
      ...getGalaxiesViewGalaxyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostGalaxiesUpdateMutationKey() {
  return ['galaxies', '/galaxies/update', 'POST'] as const
}

export function getPostGalaxiesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.update.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostGalaxiesUpdateMutationKey(),
    async mutationFn() {
      return parseResponse(client.galaxies.update.$post(undefined, options))
    },
  })
}

export function createPostGalaxiesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.update.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostGalaxiesUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteGalaxiesDeleteGalaxyIdMutationKey() {
  return ['galaxies', '/galaxies/delete/:galaxyId', 'DELETE'] as const
}

export function getDeleteGalaxiesDeleteGalaxyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxies.delete)[':galaxyId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.galaxies.delete)[':galaxyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGalaxiesDeleteGalaxyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.galaxies.delete)[':galaxyId']['$delete']>,
    ) {
      return parseResponse(client.galaxies.delete[':galaxyId'].$delete(args, options))
    },
  })
}

export function createDeleteGalaxiesDeleteGalaxyId<
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
                Awaited<ReturnType<(typeof client.galaxies.delete)[':galaxyId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.galaxies.delete)[':galaxyId']['$delete']>,
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
    const mutationDefaults = getDeleteGalaxiesDeleteGalaxyIdMutationOptions<
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

export function getPostGalaxiesImportMutationKey() {
  return ['galaxies', '/galaxies/import', 'POST'] as const
}

export function getPostGalaxiesImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.galaxies.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGalaxiesImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.galaxies.import.$post>) {
      return parseResponse(client.galaxies.import.$post(args, options))
    },
  })
}

export function createPostGalaxiesImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.galaxies.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.galaxies.import.$post>,
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
    const mutationDefaults = getPostGalaxiesImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGalaxiesExportGalaxyIdMutationKey() {
  return ['galaxies', '/galaxies/export/:galaxyId', 'POST'] as const
}

export function getPostGalaxiesExportGalaxyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxies.export)[':galaxyId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.galaxies.export)[':galaxyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGalaxiesExportGalaxyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.galaxies.export)[':galaxyId']['$post']>,
    ) {
      return parseResponse(client.galaxies.export[':galaxyId'].$post(args, options))
    },
  })
}

export function createPostGalaxiesExportGalaxyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.galaxies.export)[':galaxyId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.galaxies.export)[':galaxyId']['$post']>,
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
    const mutationDefaults = getPostGalaxiesExportGalaxyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalMutationKey() {
  return [
    'galaxies',
    '/galaxies/attachCluster/:attachTargetId/:attachTargetType/local:{local}',
    'POST',
  ] as const
}

export function getPostGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.galaxies.attachCluster)[':attachTargetId'][':attachTargetType']['local:{local}']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.galaxies.attachCluster)[':attachTargetId'][':attachTargetType']['local:{local}']['$post']
      >,
    ) {
      return parseResponse(
        client.galaxies.attachCluster[':attachTargetId'][':attachTargetType'][
          'local:{local}'
        ].$post(args, options),
      )
    },
  })
}

export function createPostGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocal<
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
                    (typeof client.galaxies.attachCluster)[':attachTargetId'][':attachTargetType']['local:{local}']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.galaxies.attachCluster)[':attachTargetId'][':attachTargetType']['local:{local}']['$post']
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
    const mutationDefaults =
      getPostGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalMutationOptions<
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

export function getPostGalaxyClustersAddGalaxyIdMutationKey() {
  return ['galaxy_clusters', '/galaxy_clusters/add/:galaxyId', 'POST'] as const
}

export function getPostGalaxyClustersAddGalaxyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxy_clusters.add)[':galaxyId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.galaxy_clusters.add)[':galaxyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGalaxyClustersAddGalaxyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.galaxy_clusters.add)[':galaxyId']['$post']>,
    ) {
      return parseResponse(client.galaxy_clusters.add[':galaxyId'].$post(args, options))
    },
  })
}

export function createPostGalaxyClustersAddGalaxyId<
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
                Awaited<ReturnType<(typeof client.galaxy_clusters.add)[':galaxyId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.galaxy_clusters.add)[':galaxyId']['$post']>,
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
    const mutationDefaults = getPostGalaxyClustersAddGalaxyIdMutationOptions<
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

export function getPutGalaxyClustersEditGalaxyClusterIdMutationKey() {
  return ['galaxy_clusters', '/galaxy_clusters/edit/:galaxyClusterId', 'PUT'] as const
}

export function getPutGalaxyClustersEditGalaxyClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxy_clusters.edit)[':galaxyClusterId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.galaxy_clusters.edit)[':galaxyClusterId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGalaxyClustersEditGalaxyClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.galaxy_clusters.edit)[':galaxyClusterId']['$put']>,
    ) {
      return parseResponse(client.galaxy_clusters.edit[':galaxyClusterId'].$put(args, options))
    },
  })
}

export function createPutGalaxyClustersEditGalaxyClusterId<
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
                  ReturnType<(typeof client.galaxy_clusters.edit)[':galaxyClusterId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.galaxy_clusters.edit)[':galaxyClusterId']['$put']>,
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
    const mutationDefaults = getPutGalaxyClustersEditGalaxyClusterIdMutationOptions<
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

export function getGalaxyClustersIndexGalaxyIdQueryKey(
  args: InferRequestType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>,
) {
  return ['galaxy_clusters', '/galaxy_clusters/index/:galaxyId', args] as const
}

export function getGalaxyClustersIndexGalaxyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGalaxyClustersIndexGalaxyIdQueryKey>
  >({
    queryKey: getGalaxyClustersIndexGalaxyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.galaxy_clusters.index[':galaxyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGalaxyClustersIndexGalaxyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.galaxy_clusters.index)[':galaxyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGalaxyClustersIndexGalaxyIdQueryKey>
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
      ...getGalaxyClustersIndexGalaxyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostGalaxyClustersIndexGalaxyIdMutationKey() {
  return ['galaxy_clusters', '/galaxy_clusters/index/:galaxyId', 'POST'] as const
}

export function getPostGalaxyClustersIndexGalaxyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxy_clusters.index)[':galaxyId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.galaxy_clusters.index)[':galaxyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGalaxyClustersIndexGalaxyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.galaxy_clusters.index)[':galaxyId']['$post']>,
    ) {
      return parseResponse(client.galaxy_clusters.index[':galaxyId'].$post(args, options))
    },
  })
}

export function createPostGalaxyClustersIndexGalaxyId<
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
                Awaited<ReturnType<(typeof client.galaxy_clusters.index)[':galaxyId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.galaxy_clusters.index)[':galaxyId']['$post']>,
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
    const mutationDefaults = getPostGalaxyClustersIndexGalaxyIdMutationOptions<
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

export function getGalaxyClustersViewGalaxyClusterIdQueryKey(
  args: InferRequestType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>,
) {
  return ['galaxy_clusters', '/galaxy_clusters/view/:galaxyClusterId', args] as const
}

export function getGalaxyClustersViewGalaxyClusterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGalaxyClustersViewGalaxyClusterIdQueryKey>
  >({
    queryKey: getGalaxyClustersViewGalaxyClusterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.galaxy_clusters.view[':galaxyClusterId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGalaxyClustersViewGalaxyClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.galaxy_clusters.view)[':galaxyClusterId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGalaxyClustersViewGalaxyClusterIdQueryKey>
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
      ...getGalaxyClustersViewGalaxyClusterIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostGalaxyClustersPublishGalaxyClusterIdMutationKey() {
  return ['galaxy_clusters', '/galaxy_clusters/publish/:galaxyClusterId', 'POST'] as const
}

export function getPostGalaxyClustersPublishGalaxyClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxy_clusters.publish)[':galaxyClusterId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.galaxy_clusters.publish)[':galaxyClusterId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGalaxyClustersPublishGalaxyClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.galaxy_clusters.publish)[':galaxyClusterId']['$post']>,
    ) {
      return parseResponse(client.galaxy_clusters.publish[':galaxyClusterId'].$post(args, options))
    },
  })
}

export function createPostGalaxyClustersPublishGalaxyClusterId<
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
                  ReturnType<(typeof client.galaxy_clusters.publish)[':galaxyClusterId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.galaxy_clusters.publish)[':galaxyClusterId']['$post']>,
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
    const mutationDefaults = getPostGalaxyClustersPublishGalaxyClusterIdMutationOptions<
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

export function getPostGalaxyClustersUnpublishGalaxyClusterIdMutationKey() {
  return ['galaxy_clusters', '/galaxy_clusters/unpublish/:galaxyClusterId', 'POST'] as const
}

export function getPostGalaxyClustersUnpublishGalaxyClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.galaxy_clusters.unpublish)[':galaxyClusterId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGalaxyClustersUnpublishGalaxyClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.galaxy_clusters.unpublish)[':galaxyClusterId']['$post']
      >,
    ) {
      return parseResponse(
        client.galaxy_clusters.unpublish[':galaxyClusterId'].$post(args, options),
      )
    },
  })
}

export function createPostGalaxyClustersUnpublishGalaxyClusterId<
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
                  ReturnType<(typeof client.galaxy_clusters.unpublish)[':galaxyClusterId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.galaxy_clusters.unpublish)[':galaxyClusterId']['$post']>,
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
    const mutationDefaults = getPostGalaxyClustersUnpublishGalaxyClusterIdMutationOptions<
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

export function getPostGalaxyClustersDeleteGalaxyClusterIdMutationKey() {
  return ['galaxy_clusters', '/galaxy_clusters/delete/:galaxyClusterId', 'POST'] as const
}

export function getPostGalaxyClustersDeleteGalaxyClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxy_clusters.delete)[':galaxyClusterId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.galaxy_clusters.delete)[':galaxyClusterId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGalaxyClustersDeleteGalaxyClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.galaxy_clusters.delete)[':galaxyClusterId']['$post']>,
    ) {
      return parseResponse(client.galaxy_clusters.delete[':galaxyClusterId'].$post(args, options))
    },
  })
}

export function createPostGalaxyClustersDeleteGalaxyClusterId<
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
                  ReturnType<(typeof client.galaxy_clusters.delete)[':galaxyClusterId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.galaxy_clusters.delete)[':galaxyClusterId']['$post']>,
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
    const mutationDefaults = getPostGalaxyClustersDeleteGalaxyClusterIdMutationOptions<
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

export function getPostGalaxyClustersRestoreGalaxyClusterIdMutationKey() {
  return ['galaxy_clusters', '/galaxy_clusters/restore/:galaxyClusterId', 'POST'] as const
}

export function getPostGalaxyClustersRestoreGalaxyClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.galaxy_clusters.restore)[':galaxyClusterId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.galaxy_clusters.restore)[':galaxyClusterId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGalaxyClustersRestoreGalaxyClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.galaxy_clusters.restore)[':galaxyClusterId']['$post']>,
    ) {
      return parseResponse(client.galaxy_clusters.restore[':galaxyClusterId'].$post(args, options))
    },
  })
}

export function createPostGalaxyClustersRestoreGalaxyClusterId<
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
                  ReturnType<(typeof client.galaxy_clusters.restore)[':galaxyClusterId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.galaxy_clusters.restore)[':galaxyClusterId']['$post']>,
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
    const mutationDefaults = getPostGalaxyClustersRestoreGalaxyClusterIdMutationOptions<
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

export function getPostUsersInitiatePasswordResetUserIdFirstTimeResetMutationKey() {
  return ['users', '/users/initiatePasswordReset/:userId/:firstTimeReset', 'POST'] as const
}

export function getPostUsersInitiatePasswordResetUserIdFirstTimeResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.users.initiatePasswordReset)[':userId'][':firstTimeReset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersInitiatePasswordResetUserIdFirstTimeResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users.initiatePasswordReset)[':userId'][':firstTimeReset']['$post']
      >,
    ) {
      return parseResponse(
        client.users.initiatePasswordReset[':userId'][':firstTimeReset'].$post(args, options),
      )
    },
  })
}

export function createPostUsersInitiatePasswordResetUserIdFirstTimeReset<
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
                    (typeof client.users.initiatePasswordReset)[':userId'][':firstTimeReset']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users.initiatePasswordReset)[':userId'][':firstTimeReset']['$post']
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
    const mutationDefaults = getPostUsersInitiatePasswordResetUserIdFirstTimeResetMutationOptions<
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

export function getPostAdminUsersAddMutationKey() {
  return ['admin', '/admin/users/add', 'POST'] as const
}

export function getPostAdminUsersAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.users.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.users.add.$post>) {
      return parseResponse(client.admin.users.add.$post(args, options))
    },
  })
}

export function createPostAdminUsersAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.add.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.users.add.$post>,
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
    const mutationDefaults = getPostAdminUsersAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutAdminUsersEditUserIdMutationKey() {
  return ['admin', '/admin/users/edit/:userId', 'PUT'] as const
}

export function getPutAdminUsersEditUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users.edit)[':userId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users.edit)[':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminUsersEditUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.users.edit)[':userId']['$put']>) {
      return parseResponse(client.admin.users.edit[':userId'].$put(args, options))
    },
  })
}

export function createPutAdminUsersEditUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users.edit)[':userId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users.edit)[':userId']['$put']>,
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
    const mutationDefaults = getPutAdminUsersEditUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAdminUsersDeleteUserIdMutationKey() {
  return ['admin', '/admin/users/delete/:userId', 'DELETE'] as const
}

export function getDeleteAdminUsersDeleteUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users.delete)[':userId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users.delete)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminUsersDeleteUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users.delete)[':userId']['$delete']>,
    ) {
      return parseResponse(client.admin.users.delete[':userId'].$delete(args, options))
    },
  })
}

export function createDeleteAdminUsersDeleteUserId<
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
                Awaited<ReturnType<(typeof client.admin.users.delete)[':userId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users.delete)[':userId']['$delete']>,
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
    const mutationDefaults = getDeleteAdminUsersDeleteUserIdMutationOptions<
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

export function getAdminUsersQueryKey() {
  return ['admin', '/admin/users'] as const
}

export function getAdminUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminUsersQueryKey>
  >({
    queryKey: getAdminUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAdminUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAdminUsersQueryKey>
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
    return { ...getAdminUsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAdminUsersViewUserIdQueryKey(
  args: InferRequestType<(typeof client.admin.users.view)[':userId']['$get']>,
) {
  return ['admin', '/admin/users/view/:userId', args] as const
}

export function getAdminUsersViewUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users.view)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.users.view)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users.view)[':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersViewUserIdQueryKey>
  >({
    queryKey: getAdminUsersViewUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.users.view[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAdminUsersViewUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users.view)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.users.view)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users.view)[':userId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAdminUsersViewUserIdQueryKey>
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
      ...getAdminUsersViewUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteUsersTotpDeleteUserIdMutationKey() {
  return ['users', '/users/totp_delete/:userId', 'DELETE'] as const
}

export function getDeleteUsersTotpDeleteUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users.totp_delete)[':userId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users.totp_delete)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersTotpDeleteUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users.totp_delete)[':userId']['$delete']>,
    ) {
      return parseResponse(client.users.totp_delete[':userId'].$delete(args, options))
    },
  })
}

export function createDeleteUsersTotpDeleteUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users.totp_delete)[':userId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users.totp_delete)[':userId']['$delete']>,
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
    const mutationDefaults = getDeleteUsersTotpDeleteUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAdminOrganisationsAddMutationKey() {
  return ['admin', '/admin/organisations/add', 'POST'] as const
}

export function getPostAdminOrganisationsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.organisations.add.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.organisations.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrganisationsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.organisations.add.$post>) {
      return parseResponse(client.admin.organisations.add.$post(args, options))
    },
  })
}

export function createPostAdminOrganisationsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.organisations.add.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.organisations.add.$post>,
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
    const mutationDefaults = getPostAdminOrganisationsAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutAdminOrganisationsEditOrganisationIdMutationKey() {
  return ['admin', '/admin/organisations/edit/:organisationId', 'PUT'] as const
}

export function getPutAdminOrganisationsEditOrganisationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.organisations.edit)[':organisationId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.organisations.edit)[':organisationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminOrganisationsEditOrganisationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.organisations.edit)[':organisationId']['$put']>,
    ) {
      return parseResponse(client.admin.organisations.edit[':organisationId'].$put(args, options))
    },
  })
}

export function createPutAdminOrganisationsEditOrganisationId<
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
                  ReturnType<(typeof client.admin.organisations.edit)[':organisationId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.organisations.edit)[':organisationId']['$put']>,
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
    const mutationDefaults = getPutAdminOrganisationsEditOrganisationIdMutationOptions<
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

export function getDeleteAdminOrganisationsDeleteOrganisationIdMutationKey() {
  return ['admin', '/admin/organisations/delete/:organisationId', 'DELETE'] as const
}

export function getDeleteAdminOrganisationsDeleteOrganisationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.admin.organisations.delete)[':organisationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminOrganisationsDeleteOrganisationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.organisations.delete)[':organisationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.organisations.delete[':organisationId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAdminOrganisationsDeleteOrganisationId<
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
                    (typeof client.admin.organisations.delete)[':organisationId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.organisations.delete)[':organisationId']['$delete']
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
    const mutationDefaults = getDeleteAdminOrganisationsDeleteOrganisationIdMutationOptions<
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

export function getPostAdminLogsMutationKey() {
  return ['admin', '/admin/logs', 'POST'] as const
}

export function getPostAdminLogsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$post>>>>>,
    TError,
    InferRequestType<typeof client.admin.logs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminLogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.logs.$post>) {
      return parseResponse(client.admin.logs.$post(args, options))
    },
  })
}

export function createPostAdminLogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.logs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.logs.$post>,
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
    const mutationDefaults = getPostAdminLogsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrganisationsQueryKey() {
  return ['organisations', '/organisations'] as const
}

export function getOrganisationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsQueryKey>
  >({
    queryKey: getOrganisationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganisations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrganisationsQueryKey>
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
    return { ...getOrganisationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOrganisationsViewOrganisationIdQueryKey(
  args: InferRequestType<(typeof client.organisations.view)[':organisationId']['$get']>,
) {
  return ['organisations', '/organisations/view/:organisationId', args] as const
}

export function getOrganisationsViewOrganisationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations.view)[':organisationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations.view)[':organisationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations.view)[':organisationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsViewOrganisationIdQueryKey>
  >({
    queryKey: getOrganisationsViewOrganisationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations.view[':organisationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganisationsViewOrganisationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations.view)[':organisationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.organisations.view)[':organisationId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organisations.view)[':organisationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganisationsViewOrganisationIdQueryKey>
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
      ...getOrganisationsViewOrganisationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostServersAddMutationKey() {
  return ['servers', '/servers/add', 'POST'] as const
}

export function getPostServersAddMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.add.$post>>>>>,
    TError,
    InferRequestType<typeof client.servers.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostServersAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.servers.add.$post>) {
      return parseResponse(client.servers.add.$post(args, options))
    },
  })
}

export function createPostServersAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.add.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.servers.add.$post>,
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
    const mutationDefaults = getPostServersAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutServersEditServerIdMutationKey() {
  return ['servers', '/servers/edit/:serverId', 'PUT'] as const
}

export function getPutServersEditServerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.servers.edit)[':serverId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.servers.edit)[':serverId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServersEditServerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.servers.edit)[':serverId']['$put']>) {
      return parseResponse(client.servers.edit[':serverId'].$put(args, options))
    },
  })
}

export function createPutServersEditServerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers.edit)[':serverId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers.edit)[':serverId']['$put']>,
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
    const mutationDefaults = getPutServersEditServerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServersDeleteServerIdMutationKey() {
  return ['servers', '/servers/delete/:serverId', 'POST'] as const
}

export function getPostServersDeleteServerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers.delete)[':serverId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers.delete)[':serverId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersDeleteServerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.servers.delete)[':serverId']['$post']>) {
      return parseResponse(client.servers.delete[':serverId'].$post(args, options))
    },
  })
}

export function createPostServersDeleteServerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers.delete)[':serverId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers.delete)[':serverId']['$post']>,
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
    const mutationDefaults = getPostServersDeleteServerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServersQueryKey() {
  return ['servers', '/servers'] as const
}

export function getServersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServersQueryKey>
  >({
    queryKey: getServersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.servers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createServers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getServersQueryKey>
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
    return { ...getServersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getServersPullServerIdPullTechniqueQueryKey(
  args: InferRequestType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>,
) {
  return ['servers', '/servers/pull/:serverId/:pullTechnique', args] as const
}

export function getServersPullServerIdPullTechniqueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersPullServerIdPullTechniqueQueryKey>
  >({
    queryKey: getServersPullServerIdPullTechniqueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers.pull[':serverId'][':pullTechnique'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServersPullServerIdPullTechnique<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.servers.pull)[':serverId'][':pullTechnique']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getServersPullServerIdPullTechniqueQueryKey>
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
      ...getServersPullServerIdPullTechniqueQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getServersPushServerIdPushTechniqueQueryKey(
  args: InferRequestType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>,
) {
  return ['servers', '/servers/push/:serverId/:pushTechnique', args] as const
}

export function getServersPushServerIdPushTechniqueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersPushServerIdPushTechniqueQueryKey>
  >({
    queryKey: getServersPushServerIdPushTechniqueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers.push[':serverId'][':pushTechnique'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServersPushServerIdPushTechnique<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.servers.push)[':serverId'][':pushTechnique']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getServersPushServerIdPushTechniqueQueryKey>
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
      ...getServersPushServerIdPushTechniqueQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getServersGetVersionQueryKey() {
  return ['servers', '/servers/getVersion'] as const
}

export function getServersGetVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.getVersion.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.getVersion.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServersGetVersionQueryKey>
  >({
    queryKey: getServersGetVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.servers.getVersion.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServersGetVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.getVersion.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.servers.getVersion.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getServersGetVersionQueryKey>
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
    return { ...getServersGetVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getServersGetPyMISPVersionQueryKey() {
  return ['servers', '/servers/getPyMISPVersion'] as const
}

export function getServersGetPyMISPVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.servers.getPyMISPVersion.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.getPyMISPVersion.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersGetPyMISPVersionQueryKey>
  >({
    queryKey: getServersGetPyMISPVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.servers.getPyMISPVersion.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServersGetPyMISPVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.servers.getPyMISPVersion.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.servers.getPyMISPVersion.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getServersGetPyMISPVersionQueryKey>
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
    return { ...getServersGetPyMISPVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getServersServerSettingsQueryKey() {
  return ['servers', '/servers/serverSettings'] as const
}

export function getServersServerSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.serverSettings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.serverSettings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersServerSettingsQueryKey>
  >({
    queryKey: getServersServerSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.servers.serverSettings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServersServerSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.serverSettings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.servers.serverSettings.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getServersServerSettingsQueryKey>
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
    return { ...getServersServerSettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getServersGetWorkersQueryKey() {
  return ['servers', '/servers/getWorkers'] as const
}

export function getServersGetWorkersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.getWorkers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.getWorkers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServersGetWorkersQueryKey>
  >({
    queryKey: getServersGetWorkersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.servers.getWorkers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServersGetWorkers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.getWorkers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.servers.getWorkers.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getServersGetWorkersQueryKey>
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
    return { ...getServersGetWorkersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostServersStartWorkerWorkerTypeMutationKey() {
  return ['servers', '/servers/startWorker/:workerType', 'POST'] as const
}

export function getPostServersStartWorkerWorkerTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers.startWorker)[':workerType']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers.startWorker)[':workerType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersStartWorkerWorkerTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers.startWorker)[':workerType']['$post']>,
    ) {
      return parseResponse(client.servers.startWorker[':workerType'].$post(args, options))
    },
  })
}

export function createPostServersStartWorkerWorkerType<
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
                Awaited<ReturnType<(typeof client.servers.startWorker)[':workerType']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers.startWorker)[':workerType']['$post']>,
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
    const mutationDefaults = getPostServersStartWorkerWorkerTypeMutationOptions<
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

export function getPostServersStopWorkerWorkerPidMutationKey() {
  return ['servers', '/servers/stopWorker/:workerPid', 'POST'] as const
}

export function getPostServersStopWorkerWorkerPidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers.stopWorker)[':workerPid']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers.stopWorker)[':workerPid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersStopWorkerWorkerPidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers.stopWorker)[':workerPid']['$post']>,
    ) {
      return parseResponse(client.servers.stopWorker[':workerPid'].$post(args, options))
    },
  })
}

export function createPostServersStopWorkerWorkerPid<
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
                Awaited<ReturnType<(typeof client.servers.stopWorker)[':workerPid']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers.stopWorker)[':workerPid']['$post']>,
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
    const mutationDefaults = getPostServersStopWorkerWorkerPidMutationOptions<
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

export function getPostServersKillAllWorkersMutationKey() {
  return ['servers', '/servers/killAllWorkers', 'POST'] as const
}

export function getPostServersKillAllWorkersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.killAllWorkers.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostServersKillAllWorkersMutationKey(),
    async mutationFn() {
      return parseResponse(client.servers.killAllWorkers.$post(undefined, options))
    },
  })
}

export function createPostServersKillAllWorkers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.servers.killAllWorkers.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostServersKillAllWorkersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServersRestartWorkersMutationKey() {
  return ['servers', '/servers/restartWorkers', 'POST'] as const
}

export function getPostServersRestartWorkersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.restartWorkers.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostServersRestartWorkersMutationKey(),
    async mutationFn() {
      return parseResponse(client.servers.restartWorkers.$post(undefined, options))
    },
  })
}

export function createPostServersRestartWorkers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.servers.restartWorkers.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostServersRestartWorkersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServersRestartDeadWorkersMutationKey() {
  return ['servers', '/servers/restartDeadWorkers', 'POST'] as const
}

export function getPostServersRestartDeadWorkersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.restartDeadWorkers.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostServersRestartDeadWorkersMutationKey(),
    async mutationFn() {
      return parseResponse(client.servers.restartDeadWorkers.$post(undefined, options))
    },
  })
}

export function createPostServersRestartDeadWorkers<
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
                Awaited<ReturnType<typeof client.servers.restartDeadWorkers.$post>>
              >
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostServersRestartDeadWorkersMutationOptions<
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

export function getPostServersUpdateMutationKey() {
  return ['servers', '/servers/update', 'POST'] as const
}

export function getPostServersUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.update.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostServersUpdateMutationKey(),
    async mutationFn() {
      return parseResponse(client.servers.update.$post(undefined, options))
    },
  })
}

export function createPostServersUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.servers.update.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostServersUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServersUpdateJSONMutationKey() {
  return ['servers', '/servers/updateJSON', 'POST'] as const
}

export function getPostServersUpdateJSONMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.updateJSON.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostServersUpdateJSONMutationKey(),
    async mutationFn() {
      return parseResponse(client.servers.updateJSON.$post(undefined, options))
    },
  })
}

export function createPostServersUpdateJSON<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.servers.updateJSON.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostServersUpdateJSONMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServersCacheMutationKey() {
  return ['servers', '/servers/cache', 'POST'] as const
}

export function getPostServersCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.cache.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostServersCacheMutationKey(),
    async mutationFn() {
      return parseResponse(client.servers.cache.$post(undefined, options))
    },
  })
}

export function createPostServersCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.cache.$post>>>>
          >,
          TError,
          void,
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
    const mutationDefaults = getPostServersCacheMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostServersCreateSyncMutationKey() {
  return ['servers', '/servers/createSync', 'POST'] as const
}

export function getPostServersCreateSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.createSync.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostServersCreateSyncMutationKey(),
    async mutationFn() {
      return parseResponse(client.servers.createSync.$post(undefined, options))
    },
  })
}

export function createPostServersCreateSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.servers.createSync.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostServersCreateSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getServersGetInstanceUUIDQueryKey() {
  return ['servers', '/servers/getInstanceUUID'] as const
}

export function getServersGetInstanceUUIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.servers.getInstanceUUID.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.servers.getInstanceUUID.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersGetInstanceUUIDQueryKey>
  >({
    queryKey: getServersGetInstanceUUIDQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.servers.getInstanceUUID.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServersGetInstanceUUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.servers.getInstanceUUID.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.servers.getInstanceUUID.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getServersGetInstanceUUIDQueryKey>
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
    return { ...getServersGetInstanceUUIDQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getServersGetSettingSettingNameQueryKey(
  args: InferRequestType<(typeof client.servers.getSetting)[':settingName']['$get']>,
) {
  return ['servers', '/servers/getSetting/:settingName', args] as const
}

export function getServersGetSettingSettingNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers.getSetting)[':settingName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers.getSetting)[':settingName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers.getSetting)[':settingName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersGetSettingSettingNameQueryKey>
  >({
    queryKey: getServersGetSettingSettingNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers.getSetting[':settingName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createServersGetSettingSettingName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers.getSetting)[':settingName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.servers.getSetting)[':settingName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers.getSetting)[':settingName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getServersGetSettingSettingNameQueryKey>
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
      ...getServersGetSettingSettingNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostServersServerSettingsEditSettingNameMutationKey() {
  return ['servers', '/servers/serverSettingsEdit/:settingName', 'POST'] as const
}

export function getPostServersServerSettingsEditSettingNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers.serverSettingsEdit)[':settingName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers.serverSettingsEdit)[':settingName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersServerSettingsEditSettingNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers.serverSettingsEdit)[':settingName']['$post']>,
    ) {
      return parseResponse(client.servers.serverSettingsEdit[':settingName'].$post(args, options))
    },
  })
}

export function createPostServersServerSettingsEditSettingName<
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
                  ReturnType<(typeof client.servers.serverSettingsEdit)[':settingName']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers.serverSettingsEdit)[':settingName']['$post']>,
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
    const mutationDefaults = getPostServersServerSettingsEditSettingNameMutationOptions<
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

export function getPostServersImportMutationKey() {
  return ['servers', '/servers/import', 'POST'] as const
}

export function getPostServersImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.servers.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostServersImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.servers.import.$post>) {
      return parseResponse(client.servers.import.$post(args, options))
    },
  })
}

export function createPostServersImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.servers.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.servers.import.$post>,
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
    const mutationDefaults = getPostServersImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSharingGroupsAddMutationKey() {
  return ['sharing_groups', '/sharing_groups/add', 'POST'] as const
}

export function getPostSharingGroupsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sharing_groups.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sharing_groups.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSharingGroupsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sharing_groups.add.$post>) {
      return parseResponse(client.sharing_groups.add.$post(args, options))
    },
  })
}

export function createPostSharingGroupsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sharing_groups.add.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sharing_groups.add.$post>,
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
    const mutationDefaults = getPostSharingGroupsAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSharingGroupsEditSharingGroupIdMutationKey() {
  return ['sharing_groups', '/sharing_groups/edit/:sharingGroupId', 'POST'] as const
}

export function getPostSharingGroupsEditSharingGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sharing_groups.edit)[':sharingGroupId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sharing_groups.edit)[':sharingGroupId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSharingGroupsEditSharingGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sharing_groups.edit)[':sharingGroupId']['$post']>,
    ) {
      return parseResponse(client.sharing_groups.edit[':sharingGroupId'].$post(args, options))
    },
  })
}

export function createPostSharingGroupsEditSharingGroupId<
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
                Awaited<ReturnType<(typeof client.sharing_groups.edit)[':sharingGroupId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sharing_groups.edit)[':sharingGroupId']['$post']>,
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
    const mutationDefaults = getPostSharingGroupsEditSharingGroupIdMutationOptions<
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

export function getDeleteSharingGroupsDeleteSharingGroupIdMutationKey() {
  return ['sharing_groups', '/sharing_groups/delete/:sharingGroupId', 'DELETE'] as const
}

export function getDeleteSharingGroupsDeleteSharingGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sharing_groups.delete)[':sharingGroupId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sharing_groups.delete)[':sharingGroupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSharingGroupsDeleteSharingGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sharing_groups.delete)[':sharingGroupId']['$delete']>,
    ) {
      return parseResponse(client.sharing_groups.delete[':sharingGroupId'].$delete(args, options))
    },
  })
}

export function createDeleteSharingGroupsDeleteSharingGroupId<
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
                  ReturnType<(typeof client.sharing_groups.delete)[':sharingGroupId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sharing_groups.delete)[':sharingGroupId']['$delete']>,
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
    const mutationDefaults = getDeleteSharingGroupsDeleteSharingGroupIdMutationOptions<
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

export function getSharingGroupsQueryKey() {
  return ['sharing_groups', '/sharing_groups'] as const
}

export function getSharingGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sharing_groups.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sharing_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSharingGroupsQueryKey>
  >({
    queryKey: getSharingGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sharing_groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSharingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sharing_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sharing_groups.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSharingGroupsQueryKey>
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
    return { ...getSharingGroupsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSharingGroupsViewSharingGroupIdQueryKey(
  args: InferRequestType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>,
) {
  return ['sharing_groups', '/sharing_groups/view/:sharingGroupId', args] as const
}

export function getSharingGroupsViewSharingGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharingGroupsViewSharingGroupIdQueryKey>
  >({
    queryKey: getSharingGroupsViewSharingGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sharing_groups.view[':sharingGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSharingGroupsViewSharingGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sharing_groups.view)[':sharingGroupId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSharingGroupsViewSharingGroupIdQueryKey>
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
      ...getSharingGroupsViewSharingGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSharingGroupsAddOrgSharingGroupIdOrganisationIdMutationKey() {
  return [
    'sharing_groups',
    '/sharing_groups/addOrg/:sharingGroupId/:organisationId',
    'POST',
  ] as const
}

export function getPostSharingGroupsAddOrgSharingGroupIdOrganisationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sharing_groups.addOrg)[':sharingGroupId'][':organisationId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSharingGroupsAddOrgSharingGroupIdOrganisationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sharing_groups.addOrg)[':sharingGroupId'][':organisationId']['$post']
      >,
    ) {
      return parseResponse(
        client.sharing_groups.addOrg[':sharingGroupId'][':organisationId'].$post(args, options),
      )
    },
  })
}

export function createPostSharingGroupsAddOrgSharingGroupIdOrganisationId<
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
                    (typeof client.sharing_groups.addOrg)[':sharingGroupId'][':organisationId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sharing_groups.addOrg)[':sharingGroupId'][':organisationId']['$post']
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
    const mutationDefaults = getPostSharingGroupsAddOrgSharingGroupIdOrganisationIdMutationOptions<
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

export function getPostSharingGroupsRemoveOrgSharingGroupIdOrganisationIdMutationKey() {
  return [
    'sharing_groups',
    '/sharing_groups/removeOrg/:sharingGroupId/:organisationId',
    'POST',
  ] as const
}

export function getPostSharingGroupsRemoveOrgSharingGroupIdOrganisationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sharing_groups.removeOrg)[':sharingGroupId'][':organisationId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSharingGroupsRemoveOrgSharingGroupIdOrganisationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sharing_groups.removeOrg)[':sharingGroupId'][':organisationId']['$post']
      >,
    ) {
      return parseResponse(
        client.sharing_groups.removeOrg[':sharingGroupId'][':organisationId'].$post(args, options),
      )
    },
  })
}

export function createPostSharingGroupsRemoveOrgSharingGroupIdOrganisationId<
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
                    (typeof client.sharing_groups.removeOrg)[':sharingGroupId'][':organisationId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sharing_groups.removeOrg)[':sharingGroupId'][':organisationId']['$post']
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
    const mutationDefaults =
      getPostSharingGroupsRemoveOrgSharingGroupIdOrganisationIdMutationOptions<
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

export function getPostSharingGroupsAddServerSharingGroupIdServerIdMutationKey() {
  return ['sharing_groups', '/sharing_groups/addServer/:sharingGroupId/:serverId', 'POST'] as const
}

export function getPostSharingGroupsAddServerSharingGroupIdServerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sharing_groups.addServer)[':sharingGroupId'][':serverId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSharingGroupsAddServerSharingGroupIdServerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sharing_groups.addServer)[':sharingGroupId'][':serverId']['$post']
      >,
    ) {
      return parseResponse(
        client.sharing_groups.addServer[':sharingGroupId'][':serverId'].$post(args, options),
      )
    },
  })
}

export function createPostSharingGroupsAddServerSharingGroupIdServerId<
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
                    (typeof client.sharing_groups.addServer)[':sharingGroupId'][':serverId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sharing_groups.addServer)[':sharingGroupId'][':serverId']['$post']
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
    const mutationDefaults = getPostSharingGroupsAddServerSharingGroupIdServerIdMutationOptions<
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

export function getPostSharingGroupsRemoveServerSharingGroupServerIdServerIdMutationKey() {
  return [
    'sharing_groups',
    '/sharing_groups/removeServer/:sharingGroupServerId/:serverId',
    'POST',
  ] as const
}

export function getPostSharingGroupsRemoveServerSharingGroupServerIdServerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sharing_groups.removeServer)[':sharingGroupServerId'][':serverId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSharingGroupsRemoveServerSharingGroupServerIdServerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sharing_groups.removeServer)[':sharingGroupServerId'][':serverId']['$post']
      >,
    ) {
      return parseResponse(
        client.sharing_groups.removeServer[':sharingGroupServerId'][':serverId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostSharingGroupsRemoveServerSharingGroupServerIdServerId<
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
                    (typeof client.sharing_groups.removeServer)[':sharingGroupServerId'][':serverId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sharing_groups.removeServer)[':sharingGroupServerId'][':serverId']['$post']
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
    const mutationDefaults =
      getPostSharingGroupsRemoveServerSharingGroupServerIdServerIdMutationOptions<
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

export function getPostSharingGroupBlueprintsAddMutationKey() {
  return ['sharing_group_blueprints', '/sharing_group_blueprints/add', 'POST'] as const
}

export function getPostSharingGroupBlueprintsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sharing_group_blueprints.add.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sharing_group_blueprints.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSharingGroupBlueprintsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sharing_group_blueprints.add.$post>) {
      return parseResponse(client.sharing_group_blueprints.add.$post(args, options))
    },
  })
}

export function createPostSharingGroupBlueprintsAdd<
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
                Awaited<ReturnType<typeof client.sharing_group_blueprints.add.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sharing_group_blueprints.add.$post>,
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
    const mutationDefaults = getPostSharingGroupBlueprintsAddMutationOptions<
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

export function getDeleteSharingGroupBlueprintsDeleteSharingGroupBlueprintIdMutationKey() {
  return [
    'sharing_group_blueprints',
    '/sharing_group_blueprints/delete/:sharingGroupBlueprintId',
    'DELETE',
  ] as const
}

export function getDeleteSharingGroupBlueprintsDeleteSharingGroupBlueprintIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sharing_group_blueprints.delete)[':sharingGroupBlueprintId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSharingGroupBlueprintsDeleteSharingGroupBlueprintIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sharing_group_blueprints.delete)[':sharingGroupBlueprintId']['$delete']
      >,
    ) {
      return parseResponse(
        client.sharing_group_blueprints.delete[':sharingGroupBlueprintId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteSharingGroupBlueprintsDeleteSharingGroupBlueprintId<
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
                    (typeof client.sharing_group_blueprints.delete)[':sharingGroupBlueprintId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sharing_group_blueprints.delete)[':sharingGroupBlueprintId']['$delete']
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
    const mutationDefaults =
      getDeleteSharingGroupBlueprintsDeleteSharingGroupBlueprintIdMutationOptions<
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

export function getPostSharingGroupBlueprintsDetachSharingGroupBlueprintIdMutationKey() {
  return [
    'sharing_group_blueprints',
    '/sharing_group_blueprints/detach/:sharingGroupBlueprintId',
    'POST',
  ] as const
}

export function getPostSharingGroupBlueprintsDetachSharingGroupBlueprintIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sharing_group_blueprints.detach)[':sharingGroupBlueprintId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSharingGroupBlueprintsDetachSharingGroupBlueprintIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sharing_group_blueprints.detach)[':sharingGroupBlueprintId']['$post']
      >,
    ) {
      return parseResponse(
        client.sharing_group_blueprints.detach[':sharingGroupBlueprintId'].$post(args, options),
      )
    },
  })
}

export function createPostSharingGroupBlueprintsDetachSharingGroupBlueprintId<
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
                    (typeof client.sharing_group_blueprints.detach)[':sharingGroupBlueprintId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sharing_group_blueprints.detach)[':sharingGroupBlueprintId']['$post']
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
    const mutationDefaults =
      getPostSharingGroupBlueprintsDetachSharingGroupBlueprintIdMutationOptions<
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

export function getPostSharingGroupBlueprintsEditSharingGroupBlueprintIdMutationKey() {
  return [
    'sharing_group_blueprints',
    '/sharing_group_blueprints/edit/:sharingGroupBlueprintId',
    'POST',
  ] as const
}

export function getPostSharingGroupBlueprintsEditSharingGroupBlueprintIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sharing_group_blueprints.edit)[':sharingGroupBlueprintId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSharingGroupBlueprintsEditSharingGroupBlueprintIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sharing_group_blueprints.edit)[':sharingGroupBlueprintId']['$post']
      >,
    ) {
      return parseResponse(
        client.sharing_group_blueprints.edit[':sharingGroupBlueprintId'].$post(args, options),
      )
    },
  })
}

export function createPostSharingGroupBlueprintsEditSharingGroupBlueprintId<
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
                    (typeof client.sharing_group_blueprints.edit)[':sharingGroupBlueprintId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sharing_group_blueprints.edit)[':sharingGroupBlueprintId']['$post']
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
    const mutationDefaults =
      getPostSharingGroupBlueprintsEditSharingGroupBlueprintIdMutationOptions<
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

export function getPostSharingGroupBlueprintsExecuteSharingGroupBlueprintIdMutationKey() {
  return [
    'sharing_group_blueprints',
    '/sharing_group_blueprints/execute/:sharingGroupBlueprintId',
    'POST',
  ] as const
}

export function getPostSharingGroupBlueprintsExecuteSharingGroupBlueprintIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sharing_group_blueprints.execute)[':sharingGroupBlueprintId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSharingGroupBlueprintsExecuteSharingGroupBlueprintIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sharing_group_blueprints.execute)[':sharingGroupBlueprintId']['$post']
      >,
    ) {
      return parseResponse(
        client.sharing_group_blueprints.execute[':sharingGroupBlueprintId'].$post(args, options),
      )
    },
  })
}

export function createPostSharingGroupBlueprintsExecuteSharingGroupBlueprintId<
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
                    (typeof client.sharing_group_blueprints.execute)[':sharingGroupBlueprintId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sharing_group_blueprints.execute)[':sharingGroupBlueprintId']['$post']
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
    const mutationDefaults =
      getPostSharingGroupBlueprintsExecuteSharingGroupBlueprintIdMutationOptions<
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

export function getSharingGroupBlueprintsIndexQueryKey() {
  return ['sharing_group_blueprints', '/sharing_group_blueprints/index'] as const
}

export function getSharingGroupBlueprintsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sharing_group_blueprints.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sharing_group_blueprints.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSharingGroupBlueprintsIndexQueryKey>
  >({
    queryKey: getSharingGroupBlueprintsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sharing_group_blueprints.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSharingGroupBlueprintsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sharing_group_blueprints.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sharing_group_blueprints.index.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSharingGroupBlueprintsIndexQueryKey>
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
    return { ...getSharingGroupBlueprintsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSharingGroupBlueprintsViewSharingGroupBlueprintIdQueryKey(
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

export function getSharingGroupBlueprintsViewSharingGroupBlueprintIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sharing_group_blueprints.view)[':sharingGroupBlueprintId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSharingGroupBlueprintsViewSharingGroupBlueprintIdQueryKey>
  >({
    queryKey: getSharingGroupBlueprintsViewSharingGroupBlueprintIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sharing_group_blueprints.view[':sharingGroupBlueprintId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSharingGroupBlueprintsViewSharingGroupBlueprintId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.sharing_group_blueprints.view)[':sharingGroupBlueprintId']['$get']
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
                    (typeof client.sharing_group_blueprints.view)[':sharingGroupBlueprintId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSharingGroupBlueprintsViewSharingGroupBlueprintIdQueryKey>
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
      ...getSharingGroupBlueprintsViewSharingGroupBlueprintIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdQueryKey(
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

export function getSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.sharing_group_blueprints.viewOrgs)[':sharingGroupBlueprintId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdQueryKey>
  >({
    queryKey: getSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sharing_group_blueprints.viewOrgs[':sharingGroupBlueprintId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSharingGroupBlueprintsViewOrgsSharingGroupBlueprintId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.sharing_group_blueprints.viewOrgs)[':sharingGroupBlueprintId']['$get']
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
                    (typeof client.sharing_group_blueprints.viewOrgs)[':sharingGroupBlueprintId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdQueryKey>
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
      ...getSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFeedsQueryKey() {
  return ['feeds', '/feeds'] as const
}

export function getFeedsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeedsQueryKey>
  >({
    queryKey: getFeedsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.feeds.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFeeds<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getFeedsQueryKey>
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
    return { ...getFeedsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getFeedsViewFeedIdQueryKey(
  args: InferRequestType<(typeof client.feeds.view)[':feedId']['$get']>,
) {
  return ['feeds', '/feeds/view/:feedId', args] as const
}

export function getFeedsViewFeedIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.view)[':feedId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feeds.view)[':feedId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.view)[':feedId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedsViewFeedIdQueryKey>
  >({
    queryKey: getFeedsViewFeedIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feeds.view[':feedId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFeedsViewFeedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.view)[':feedId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.feeds.view)[':feedId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds.view)[':feedId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeedsViewFeedIdQueryKey>
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
    return { ...getFeedsViewFeedIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostFeedsAddMutationKey() {
  return ['feeds', '/feeds/add', 'POST'] as const
}

export function getPostFeedsAddMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.add.$post>>>>>,
    TError,
    InferRequestType<typeof client.feeds.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFeedsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.feeds.add.$post>) {
      return parseResponse(client.feeds.add.$post(args, options))
    },
  })
}

export function createPostFeedsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.add.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.feeds.add.$post>,
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
    const mutationDefaults = getPostFeedsAddMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutFeedsEditFeedIdMutationKey() {
  return ['feeds', '/feeds/edit/:feedId', 'PUT'] as const
}

export function getPutFeedsEditFeedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.edit)[':feedId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.feeds.edit)[':feedId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFeedsEditFeedIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.feeds.edit)[':feedId']['$put']>) {
      return parseResponse(client.feeds.edit[':feedId'].$put(args, options))
    },
  })
}

export function createPutFeedsEditFeedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds.edit)[':feedId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.feeds.edit)[':feedId']['$put']>,
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
    const mutationDefaults = getPutFeedsEditFeedIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFeedsEnableFeedIdMutationKey() {
  return ['feeds', '/feeds/enable/:feedId', 'POST'] as const
}

export function getPostFeedsEnableFeedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.enable)[':feedId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.feeds.enable)[':feedId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFeedsEnableFeedIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.feeds.enable)[':feedId']['$post']>) {
      return parseResponse(client.feeds.enable[':feedId'].$post(args, options))
    },
  })
}

export function createPostFeedsEnableFeedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds.enable)[':feedId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.feeds.enable)[':feedId']['$post']>,
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
    const mutationDefaults = getPostFeedsEnableFeedIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFeedsDisableFeedIdMutationKey() {
  return ['feeds', '/feeds/disable/:feedId', 'POST'] as const
}

export function getPostFeedsDisableFeedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feeds.disable)[':feedId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.feeds.disable)[':feedId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFeedsDisableFeedIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.feeds.disable)[':feedId']['$post']>) {
      return parseResponse(client.feeds.disable[':feedId'].$post(args, options))
    },
  })
}

export function createPostFeedsDisableFeedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feeds.disable)[':feedId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.feeds.disable)[':feedId']['$post']>,
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
    const mutationDefaults = getPostFeedsDisableFeedIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFeedsCacheFeedsCacheFeedsScopeMutationKey() {
  return ['feeds', '/feeds/cacheFeeds/:cacheFeedsScope', 'POST'] as const
}

export function getPostFeedsCacheFeedsCacheFeedsScopeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.feeds.cacheFeeds)[':cacheFeedsScope']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.feeds.cacheFeeds)[':cacheFeedsScope']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFeedsCacheFeedsCacheFeedsScopeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.feeds.cacheFeeds)[':cacheFeedsScope']['$post']>,
    ) {
      return parseResponse(client.feeds.cacheFeeds[':cacheFeedsScope'].$post(args, options))
    },
  })
}

export function createPostFeedsCacheFeedsCacheFeedsScope<
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
                Awaited<ReturnType<(typeof client.feeds.cacheFeeds)[':cacheFeedsScope']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.feeds.cacheFeeds)[':cacheFeedsScope']['$post']>,
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
    const mutationDefaults = getPostFeedsCacheFeedsCacheFeedsScopeMutationOptions<
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

export function getPostFeedsFetchFromFeedFeedIdMutationKey() {
  return ['feeds', '/feeds/fetchFromFeed/:feedId', 'POST'] as const
}

export function getPostFeedsFetchFromFeedFeedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.feeds.fetchFromFeed)[':feedId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.feeds.fetchFromFeed)[':feedId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFeedsFetchFromFeedFeedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.feeds.fetchFromFeed)[':feedId']['$post']>,
    ) {
      return parseResponse(client.feeds.fetchFromFeed[':feedId'].$post(args, options))
    },
  })
}

export function createPostFeedsFetchFromFeedFeedId<
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
                Awaited<ReturnType<(typeof client.feeds.fetchFromFeed)[':feedId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.feeds.fetchFromFeed)[':feedId']['$post']>,
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
    const mutationDefaults = getPostFeedsFetchFromFeedFeedIdMutationOptions<
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

export function getPostFeedsFetchFromAllFeedsMutationKey() {
  return ['feeds', '/feeds/fetchFromAllFeeds', 'POST'] as const
}

export function getPostFeedsFetchFromAllFeedsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.feeds.fetchFromAllFeeds.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostFeedsFetchFromAllFeedsMutationKey(),
    async mutationFn() {
      return parseResponse(client.feeds.fetchFromAllFeeds.$post(undefined, options))
    },
  })
}

export function createPostFeedsFetchFromAllFeeds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.feeds.fetchFromAllFeeds.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostFeedsFetchFromAllFeedsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWarninglistsQueryKey() {
  return ['warninglists', '/warninglists'] as const
}

export function getWarninglistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWarninglistsQueryKey>
  >({
    queryKey: getWarninglistsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.warninglists.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWarninglists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getWarninglistsQueryKey>
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
    return { ...getWarninglistsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostWarninglistsMutationKey() {
  return ['warninglists', '/warninglists', 'POST'] as const
}

export function getPostWarninglistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.warninglists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWarninglistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.warninglists.$post>) {
      return parseResponse(client.warninglists.$post(args, options))
    },
  })
}

export function createPostWarninglists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.warninglists.$post>,
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
    const mutationDefaults = getPostWarninglistsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWarninglistsToggleEnableMutationKey() {
  return ['warninglists', '/warninglists/toggleEnable', 'POST'] as const
}

export function getPostWarninglistsToggleEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.toggleEnable.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.warninglists.toggleEnable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWarninglistsToggleEnableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.warninglists.toggleEnable.$post>) {
      return parseResponse(client.warninglists.toggleEnable.$post(args, options))
    },
  })
}

export function createPostWarninglistsToggleEnable<
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
                Awaited<ReturnType<typeof client.warninglists.toggleEnable.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.warninglists.toggleEnable.$post>,
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
    const mutationDefaults = getPostWarninglistsToggleEnableMutationOptions<
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

export function getWarninglistsViewWarninglistIdQueryKey(
  args: InferRequestType<(typeof client.warninglists.view)[':warninglistId']['$get']>,
) {
  return ['warninglists', '/warninglists/view/:warninglistId', args] as const
}

export function getWarninglistsViewWarninglistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.warninglists.view)[':warninglistId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.warninglists.view)[':warninglistId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.warninglists.view)[':warninglistId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWarninglistsViewWarninglistIdQueryKey>
  >({
    queryKey: getWarninglistsViewWarninglistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.warninglists.view[':warninglistId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWarninglistsViewWarninglistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.warninglists.view)[':warninglistId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.warninglists.view)[':warninglistId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.warninglists.view)[':warninglistId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWarninglistsViewWarninglistIdQueryKey>
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
      ...getWarninglistsViewWarninglistIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostWarninglistsCheckValueMutationKey() {
  return ['warninglists', '/warninglists/checkValue', 'POST'] as const
}

export function getPostWarninglistsCheckValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.checkValue.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.warninglists.checkValue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWarninglistsCheckValueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.warninglists.checkValue.$post>) {
      return parseResponse(client.warninglists.checkValue.$post(args, options))
    },
  })
}

export function createPostWarninglistsCheckValue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.checkValue.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.warninglists.checkValue.$post>,
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
    const mutationDefaults = getPostWarninglistsCheckValueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWarninglistsUpdateMutationKey() {
  return ['warninglists', '/warninglists/update', 'POST'] as const
}

export function getPostWarninglistsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.update.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostWarninglistsUpdateMutationKey(),
    async mutationFn() {
      return parseResponse(client.warninglists.update.$post(undefined, options))
    },
  })
}

export function createPostWarninglistsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.warninglists.update.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostWarninglistsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNoticelistsQueryKey() {
  return ['noticelists', '/noticelists'] as const
}

export function getNoticelistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.noticelists.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.noticelists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNoticelistsQueryKey>
  >({
    queryKey: getNoticelistsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.noticelists.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNoticelists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.noticelists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.noticelists.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNoticelistsQueryKey>
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
    return { ...getNoticelistsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNoticelistsViewNoticelistIdQueryKey(
  args: InferRequestType<(typeof client.noticelists.view)[':noticelistId']['$get']>,
) {
  return ['noticelists', '/noticelists/view/:noticelistId', args] as const
}

export function getNoticelistsViewNoticelistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.noticelists.view)[':noticelistId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.noticelists.view)[':noticelistId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.noticelists.view)[':noticelistId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNoticelistsViewNoticelistIdQueryKey>
  >({
    queryKey: getNoticelistsViewNoticelistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.noticelists.view[':noticelistId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNoticelistsViewNoticelistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.noticelists.view)[':noticelistId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.noticelists.view)[':noticelistId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.noticelists.view)[':noticelistId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNoticelistsViewNoticelistIdQueryKey>
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
      ...getNoticelistsViewNoticelistIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostNoticelistsToggleEnableNoticelistIdMutationKey() {
  return ['noticelists', '/noticelists/toggleEnable/:noticelistId', 'POST'] as const
}

export function getPostNoticelistsToggleEnableNoticelistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.noticelists.toggleEnable)[':noticelistId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.noticelists.toggleEnable)[':noticelistId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNoticelistsToggleEnableNoticelistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.noticelists.toggleEnable)[':noticelistId']['$post']>,
    ) {
      return parseResponse(client.noticelists.toggleEnable[':noticelistId'].$post(args, options))
    },
  })
}

export function createPostNoticelistsToggleEnableNoticelistId<
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
                  ReturnType<(typeof client.noticelists.toggleEnable)[':noticelistId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.noticelists.toggleEnable)[':noticelistId']['$post']>,
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
    const mutationDefaults = getPostNoticelistsToggleEnableNoticelistIdMutationOptions<
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

export function getPostNoticelistsUpdateMutationKey() {
  return ['noticelists', '/noticelists/update', 'POST'] as const
}

export function getPostNoticelistsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.noticelists.update.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostNoticelistsUpdateMutationKey(),
    async mutationFn() {
      return parseResponse(client.noticelists.update.$post(undefined, options))
    },
  })
}

export function createPostNoticelistsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.noticelists.update.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostNoticelistsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostObjectsRestsearchMutationKey() {
  return ['objects', '/objects/restsearch', 'POST'] as const
}

export function getPostObjectsRestsearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.objects.restsearch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.objects.restsearch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectsRestsearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.objects.restsearch.$post>) {
      return parseResponse(client.objects.restsearch.$post(args, options))
    },
  })
}

export function createPostObjectsRestsearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.objects.restsearch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.objects.restsearch.$post>,
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
    const mutationDefaults = getPostObjectsRestsearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostObjectsAddEventIdObjectTemplateIdMutationKey() {
  return ['objects', '/objects/add/:eventId/:objectTemplateId', 'POST'] as const
}

export function getPostObjectsAddEventIdObjectTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.add)[':eventId'][':objectTemplateId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.objects.add)[':eventId'][':objectTemplateId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectsAddEventIdObjectTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.objects.add)[':eventId'][':objectTemplateId']['$post']>,
    ) {
      return parseResponse(client.objects.add[':eventId'][':objectTemplateId'].$post(args, options))
    },
  })
}

export function createPostObjectsAddEventIdObjectTemplateId<
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
                  ReturnType<(typeof client.objects.add)[':eventId'][':objectTemplateId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.objects.add)[':eventId'][':objectTemplateId']['$post']>,
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
    const mutationDefaults = getPostObjectsAddEventIdObjectTemplateIdMutationOptions<
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

export function getObjectsViewObjectIdQueryKey(
  args: InferRequestType<(typeof client.objects.view)[':objectId']['$get']>,
) {
  return ['objects', '/objects/view/:objectId', args] as const
}

export function getObjectsViewObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.objects.view)[':objectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.objects.view)[':objectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.objects.view)[':objectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectsViewObjectIdQueryKey>
  >({
    queryKey: getObjectsViewObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.objects.view[':objectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createObjectsViewObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.objects.view)[':objectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.objects.view)[':objectId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.objects.view)[':objectId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getObjectsViewObjectIdQueryKey>
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
    return { ...getObjectsViewObjectIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteObjectsDeleteObjectIdHardDeleteMutationKey() {
  return ['objects', '/objects/delete/:objectId/:hardDelete', 'DELETE'] as const
}

export function getDeleteObjectsDeleteObjectIdHardDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects.delete)[':objectId'][':hardDelete']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.objects.delete)[':objectId'][':hardDelete']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteObjectsDeleteObjectIdHardDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.objects.delete)[':objectId'][':hardDelete']['$delete']>,
    ) {
      return parseResponse(client.objects.delete[':objectId'][':hardDelete'].$delete(args, options))
    },
  })
}

export function createDeleteObjectsDeleteObjectIdHardDelete<
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
                  ReturnType<(typeof client.objects.delete)[':objectId'][':hardDelete']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.objects.delete)[':objectId'][':hardDelete']['$delete']>,
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
    const mutationDefaults = getDeleteObjectsDeleteObjectIdHardDeleteMutationOptions<
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

export function getSightingsIndexEventIdQueryKey(
  args: InferRequestType<(typeof client.sightings.index)[':eventId']['$get']>,
) {
  return ['sightings', '/sightings/index/:eventId', args] as const
}

export function getSightingsIndexEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sightings.index)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sightings.index)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sightings.index)[':eventId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSightingsIndexEventIdQueryKey>
  >({
    queryKey: getSightingsIndexEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sightings.index[':eventId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSightingsIndexEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sightings.index)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sightings.index)[':eventId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sightings.index)[':eventId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSightingsIndexEventIdQueryKey>
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
      ...getSightingsIndexEventIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSightingsAddMutationKey() {
  return ['sightings', '/sightings/add', 'POST'] as const
}

export function getPostSightingsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sightings.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sightings.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSightingsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sightings.add.$post>) {
      return parseResponse(client.sightings.add.$post(args, options))
    },
  })
}

export function createPostSightingsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sightings.add.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sightings.add.$post>,
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
    const mutationDefaults = getPostSightingsAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSightingsAddAttributeIdMutationKey() {
  return ['sightings', '/sightings/add/:attributeId', 'POST'] as const
}

export function getPostSightingsAddAttributeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sightings.add)[':attributeId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sightings.add)[':attributeId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSightingsAddAttributeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sightings.add)[':attributeId']['$post']>,
    ) {
      return parseResponse(client.sightings.add[':attributeId'].$post(args, options))
    },
  })
}

export function createPostSightingsAddAttributeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sightings.add)[':attributeId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sightings.add)[':attributeId']['$post']>,
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
    const mutationDefaults = getPostSightingsAddAttributeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSightingsDeleteSightingIdMutationKey() {
  return ['sightings', '/sightings/delete/:sightingId', 'POST'] as const
}

export function getPostSightingsDeleteSightingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sightings.delete)[':sightingId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sightings.delete)[':sightingId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSightingsDeleteSightingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sightings.delete)[':sightingId']['$post']>,
    ) {
      return parseResponse(client.sightings.delete[':sightingId'].$post(args, options))
    },
  })
}

export function createPostSightingsDeleteSightingId<
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
                Awaited<ReturnType<(typeof client.sightings.delete)[':sightingId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sightings.delete)[':sightingId']['$post']>,
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
    const mutationDefaults = getPostSightingsDeleteSightingIdMutationOptions<
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

export function getTagsQueryKey() {
  return ['tags', '/tags'] as const
}

export function getTagsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >({
    queryKey: getTagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getTagsQueryKey>
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
    return { ...getTagsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getTagsViewTagIdQueryKey(
  args: InferRequestType<(typeof client.tags.view)[':tagId']['$get']>,
) {
  return ['tags', '/tags/view/:tagId', args] as const
}

export function getTagsViewTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags.view)[':tagId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags.view)[':tagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags.view)[':tagId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsViewTagIdQueryKey>
  >({
    queryKey: getTagsViewTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.view[':tagId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsViewTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags.view)[':tagId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags.view)[':tagId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags.view)[':tagId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsViewTagIdQueryKey>
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
    return { ...getTagsViewTagIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTagsAddMutationKey() {
  return ['tags', '/tags/add', 'POST'] as const
}

export function getPostTagsAddMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.add.$post>>>>>,
    TError,
    InferRequestType<typeof client.tags.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tags.add.$post>) {
      return parseResponse(client.tags.add.$post(args, options))
    },
  })
}

export function createPostTagsAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.add.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tags.add.$post>,
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
    const mutationDefaults = getPostTagsAddMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTagsDeleteTagIdMutationKey() {
  return ['tags', '/tags/delete/:tagId', 'POST'] as const
}

export function getPostTagsDeleteTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags.delete)[':tagId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags.delete)[':tagId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsDeleteTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags.delete)[':tagId']['$post']>) {
      return parseResponse(client.tags.delete[':tagId'].$post(args, options))
    },
  })
}

export function createPostTagsDeleteTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags.delete)[':tagId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags.delete)[':tagId']['$post']>,
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
    const mutationDefaults = getPostTagsDeleteTagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTagsEditTagIdMutationKey() {
  return ['tags', '/tags/edit/:tagId', 'POST'] as const
}

export function getPostTagsEditTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags.edit)[':tagId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags.edit)[':tagId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsEditTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags.edit)[':tagId']['$post']>) {
      return parseResponse(client.tags.edit[':tagId'].$post(args, options))
    },
  })
}

export function createPostTagsEditTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags.edit)[':tagId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags.edit)[':tagId']['$post']>,
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
    const mutationDefaults = getPostTagsEditTagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsSearchTagSearchTermQueryKey(
  args: InferRequestType<(typeof client.tags.search)[':tagSearchTerm']['$get']>,
) {
  return ['tags', '/tags/search/:tagSearchTerm', args] as const
}

export function getTagsSearchTagSearchTermQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags.search)[':tagSearchTerm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags.search)[':tagSearchTerm']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags.search)[':tagSearchTerm']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsSearchTagSearchTermQueryKey>
  >({
    queryKey: getTagsSearchTagSearchTermQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.search[':tagSearchTerm'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTagsSearchTagSearchTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags.search)[':tagSearchTerm']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags.search)[':tagSearchTerm']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags.search)[':tagSearchTerm']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsSearchTagSearchTermQueryKey>
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
      ...getTagsSearchTagSearchTermQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAuthKeysQueryKey() {
  return ['auth_keys', '/auth_keys'] as const
}

export function getAuthKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth_keys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth_keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthKeysQueryKey>
  >({
    queryKey: getAuthKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth_keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAuthKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth_keys.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAuthKeysQueryKey>
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
    return { ...getAuthKeysQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAuthKeysMutationKey() {
  return ['auth_keys', '/auth_keys', 'POST'] as const
}

export function getPostAuthKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth_keys.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth_keys.$post>) {
      return parseResponse(client.auth_keys.$post(args, options))
    },
  })
}

export function createPostAuthKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth_keys.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth_keys.$post>,
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
    const mutationDefaults = getPostAuthKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAuthKeysAddUserIdMutationKey() {
  return ['auth_keys', '/auth_keys/add/:userId', 'POST'] as const
}

export function getPostAuthKeysAddUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth_keys.add)[':userId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.auth_keys.add)[':userId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthKeysAddUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth_keys.add)[':userId']['$post']>) {
      return parseResponse(client.auth_keys.add[':userId'].$post(args, options))
    },
  })
}

export function createPostAuthKeysAddUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth_keys.add)[':userId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth_keys.add)[':userId']['$post']>,
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
    const mutationDefaults = getPostAuthKeysAddUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuthKeysViewAuthKeyIdQueryKey(
  args: InferRequestType<(typeof client.auth_keys.view)[':authKeyId']['$get']>,
) {
  return ['auth_keys', '/auth_keys/view/:authKeyId', args] as const
}

export function getAuthKeysViewAuthKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth_keys.view)[':authKeyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.auth_keys.view)[':authKeyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth_keys.view)[':authKeyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthKeysViewAuthKeyIdQueryKey>
  >({
    queryKey: getAuthKeysViewAuthKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.auth_keys.view[':authKeyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthKeysViewAuthKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.auth_keys.view)[':authKeyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.auth_keys.view)[':authKeyId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth_keys.view)[':authKeyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAuthKeysViewAuthKeyIdQueryKey>
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
      ...getAuthKeysViewAuthKeyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAuthKeysEditAuthKeyIdMutationKey() {
  return ['auth_keys', '/auth_keys/edit/:authKeyId', 'POST'] as const
}

export function getPostAuthKeysEditAuthKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth_keys.edit)[':authKeyId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth_keys.edit)[':authKeyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthKeysEditAuthKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth_keys.edit)[':authKeyId']['$post']>,
    ) {
      return parseResponse(client.auth_keys.edit[':authKeyId'].$post(args, options))
    },
  })
}

export function createPostAuthKeysEditAuthKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth_keys.edit)[':authKeyId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth_keys.edit)[':authKeyId']['$post']>,
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
    const mutationDefaults = getPostAuthKeysEditAuthKeyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAuthKeysDeleteAuthKeyIdMutationKey() {
  return ['auth_keys', '/auth_keys/delete/:authKeyId', 'DELETE'] as const
}

export function getDeleteAuthKeysDeleteAuthKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth_keys.delete)[':authKeyId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth_keys.delete)[':authKeyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthKeysDeleteAuthKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth_keys.delete)[':authKeyId']['$delete']>,
    ) {
      return parseResponse(client.auth_keys.delete[':authKeyId'].$delete(args, options))
    },
  })
}

export function createDeleteAuthKeysDeleteAuthKeyId<
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
                Awaited<ReturnType<(typeof client.auth_keys.delete)[':authKeyId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth_keys.delete)[':authKeyId']['$delete']>,
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
    const mutationDefaults = getDeleteAuthKeysDeleteAuthKeyIdMutationOptions<
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

export function getUserSettingsQueryKey() {
  return ['user_settings', '/user_settings'] as const
}

export function getUserSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserSettingsQueryKey>
  >({
    queryKey: getUserSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user_settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_settings.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUserSettingsQueryKey>
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
    return { ...getUserSettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostUserSettingsMutationKey() {
  return ['user_settings', '/user_settings', 'POST'] as const
}

export function getPostUserSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_settings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user_settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_settings.$post>) {
      return parseResponse(client.user_settings.$post(args, options))
    },
  })
}

export function createPostUserSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_settings.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.user_settings.$post>,
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
    const mutationDefaults = getPostUserSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUserSettingsViewUserSettingIdQueryKey(
  args: InferRequestType<(typeof client.user_settings.view)[':userSettingId']['$get']>,
) {
  return ['user_settings', '/user_settings/view/:userSettingId', args] as const
}

export function getUserSettingsViewUserSettingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_settings.view)[':userSettingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user_settings.view)[':userSettingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_settings.view)[':userSettingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserSettingsViewUserSettingIdQueryKey>
  >({
    queryKey: getUserSettingsViewUserSettingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_settings.view[':userSettingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserSettingsViewUserSettingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user_settings.view)[':userSettingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user_settings.view)[':userSettingId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user_settings.view)[':userSettingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserSettingsViewUserSettingIdQueryKey>
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
      ...getUserSettingsViewUserSettingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostUserSettingsSetSettingUserIdUserSettingNameMutationKey() {
  return ['user_settings', '/user_settings/setSetting/:userId/:userSettingName', 'POST'] as const
}

export function getPostUserSettingsSetSettingUserIdUserSettingNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.user_settings.setSetting)[':userId'][':userSettingName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUserSettingsSetSettingUserIdUserSettingNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_settings.setSetting)[':userId'][':userSettingName']['$post']
      >,
    ) {
      return parseResponse(
        client.user_settings.setSetting[':userId'][':userSettingName'].$post(args, options),
      )
    },
  })
}

export function createPostUserSettingsSetSettingUserIdUserSettingName<
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
                    (typeof client.user_settings.setSetting)[':userId'][':userSettingName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.user_settings.setSetting)[':userId'][':userSettingName']['$post']
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
    const mutationDefaults = getPostUserSettingsSetSettingUserIdUserSettingNameMutationOptions<
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

export function getUserSettingsGetSettingUserIdUserSettingNameQueryKey(
  args: InferRequestType<
    (typeof client.user_settings.getSetting)[':userId'][':userSettingName']['$get']
  >,
) {
  return ['user_settings', '/user_settings/getSetting/:userId/:userSettingName', args] as const
}

export function getUserSettingsGetSettingUserIdUserSettingNameQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user_settings.getSetting)[':userId'][':userSettingName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getUserSettingsGetSettingUserIdUserSettingNameQueryKey>
  >({
    queryKey: getUserSettingsGetSettingUserIdUserSettingNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user_settings.getSetting[':userId'][':userSettingName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserSettingsGetSettingUserIdUserSettingName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.user_settings.getSetting)[':userId'][':userSettingName']['$get']
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
                    (typeof client.user_settings.getSetting)[':userId'][':userSettingName']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserSettingsGetSettingUserIdUserSettingNameQueryKey>
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
      ...getUserSettingsGetSettingUserIdUserSettingNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteUserSettingsDeleteUserSettingIdMutationKey() {
  return ['user_settings', '/user_settings/delete/:userSettingId', 'DELETE'] as const
}

export function getDeleteUserSettingsDeleteUserSettingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user_settings.delete)[':userSettingId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user_settings.delete)[':userSettingId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserSettingsDeleteUserSettingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_settings.delete)[':userSettingId']['$delete']>,
    ) {
      return parseResponse(client.user_settings.delete[':userSettingId'].$delete(args, options))
    },
  })
}

export function createDeleteUserSettingsDeleteUserSettingId<
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
                  ReturnType<(typeof client.user_settings.delete)[':userSettingId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user_settings.delete)[':userSettingId']['$delete']>,
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
    const mutationDefaults = getDeleteUserSettingsDeleteUserSettingIdMutationOptions<
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

export function getTaxonomiesQueryKey() {
  return ['taxonomies', '/taxonomies'] as const
}

export function getTaxonomiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTaxonomiesQueryKey>
  >({
    queryKey: getTaxonomiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.taxonomies.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTaxonomies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getTaxonomiesQueryKey>
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
    return { ...getTaxonomiesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getTaxonomiesViewTaxonomyIdQueryKey(
  args: InferRequestType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>,
) {
  return ['taxonomies', '/taxonomies/view/:taxonomyId', args] as const
}

export function getTaxonomiesViewTaxonomyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaxonomiesViewTaxonomyIdQueryKey>
  >({
    queryKey: getTaxonomiesViewTaxonomyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.taxonomies.view[':taxonomyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTaxonomiesViewTaxonomyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.taxonomies.view)[':taxonomyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTaxonomiesViewTaxonomyIdQueryKey>
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
      ...getTaxonomiesViewTaxonomyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTaxonomiesEnableTaxonomyIdMutationKey() {
  return ['taxonomies', '/taxonomies/enable/:taxonomyId', 'POST'] as const
}

export function getPostTaxonomiesEnableTaxonomyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.taxonomies.enable)[':taxonomyId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.taxonomies.enable)[':taxonomyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTaxonomiesEnableTaxonomyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.taxonomies.enable)[':taxonomyId']['$post']>,
    ) {
      return parseResponse(client.taxonomies.enable[':taxonomyId'].$post(args, options))
    },
  })
}

export function createPostTaxonomiesEnableTaxonomyId<
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
                Awaited<ReturnType<(typeof client.taxonomies.enable)[':taxonomyId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.taxonomies.enable)[':taxonomyId']['$post']>,
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
    const mutationDefaults = getPostTaxonomiesEnableTaxonomyIdMutationOptions<
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

export function getPostTaxonomiesDisableTaxonomyIdMutationKey() {
  return ['taxonomies', '/taxonomies/disable/:taxonomyId', 'POST'] as const
}

export function getPostTaxonomiesDisableTaxonomyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.taxonomies.disable)[':taxonomyId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.taxonomies.disable)[':taxonomyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTaxonomiesDisableTaxonomyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.taxonomies.disable)[':taxonomyId']['$post']>,
    ) {
      return parseResponse(client.taxonomies.disable[':taxonomyId'].$post(args, options))
    },
  })
}

export function createPostTaxonomiesDisableTaxonomyId<
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
                Awaited<ReturnType<(typeof client.taxonomies.disable)[':taxonomyId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.taxonomies.disable)[':taxonomyId']['$post']>,
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
    const mutationDefaults = getPostTaxonomiesDisableTaxonomyIdMutationOptions<
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

export function getPostTaxonomiesUpdateMutationKey() {
  return ['taxonomies', '/taxonomies/update', 'POST'] as const
}

export function getPostTaxonomiesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.update.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostTaxonomiesUpdateMutationKey(),
    async mutationFn() {
      return parseResponse(client.taxonomies.update.$post(undefined, options))
    },
  })
}

export function createPostTaxonomiesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.update.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostTaxonomiesUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTaxonomiesTaxonomyTagsTaxonomyIdQueryKey(
  args: InferRequestType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>,
) {
  return ['taxonomies', '/taxonomies/taxonomy_tags/:taxonomyId', args] as const
}

export function getTaxonomiesTaxonomyTagsTaxonomyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaxonomiesTaxonomyTagsTaxonomyIdQueryKey>
  >({
    queryKey: getTaxonomiesTaxonomyTagsTaxonomyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.taxonomies.taxonomy_tags[':taxonomyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTaxonomiesTaxonomyTagsTaxonomyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.taxonomies.taxonomy_tags)[':taxonomyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTaxonomiesTaxonomyTagsTaxonomyIdQueryKey>
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
      ...getTaxonomiesTaxonomyTagsTaxonomyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTaxonomiesExportTaxonomyIdQueryKey(
  args: InferRequestType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>,
) {
  return ['taxonomies', '/taxonomies/export/:taxonomyId', args] as const
}

export function getTaxonomiesExportTaxonomyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaxonomiesExportTaxonomyIdQueryKey>
  >({
    queryKey: getTaxonomiesExportTaxonomyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.taxonomies.export[':taxonomyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTaxonomiesExportTaxonomyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.taxonomies.export)[':taxonomyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTaxonomiesExportTaxonomyIdQueryKey>
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
      ...getTaxonomiesExportTaxonomyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
