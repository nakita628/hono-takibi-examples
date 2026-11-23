import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCreatePathwayKey() {
  return ['createPathway'] as const
}

export function getFindInteractionsKey() {
  return ['findInteractions'] as const
}

export function getFindPathwaysByLiteratureKey() {
  return ['findPathwaysByLiterature'] as const
}

export function getFindPathwaysByTextKey() {
  return ['findPathwaysByText'] as const
}

export function getFindPathwaysByXrefKey() {
  return ['findPathwaysByXref'] as const
}

export function getGetColoredPathwayKey() {
  return ['getColoredPathway'] as const
}

export function getGetCurationTagHistoryKey() {
  return ['getCurationTagHistory'] as const
}

export function getGetCurationTagsKey() {
  return ['getCurationTags'] as const
}

export function getGetCurationTagsByNameKey() {
  return ['getCurationTagsByName'] as const
}

export function getGetOntologyTermsByPathwayKey() {
  return ['getOntologyTermsByPathway'] as const
}

export function getGetPathwayKey() {
  return ['getPathway'] as const
}

export function getGetPathwayAsKey() {
  return ['getPathwayAs'] as const
}

export function getGetPathwayHistoryKey() {
  return ['getPathwayHistory'] as const
}

export function getGetPathwayInfoKey() {
  return ['getPathwayInfo'] as const
}

export function getGetPathwaysByOntologyTermKey() {
  return ['getPathwaysByOntologyTerm'] as const
}

export function getGetPathwaysByParentOntologyTermKey() {
  return ['getPathwaysByParentOntologyTerm'] as const
}

export function getGetRecentChangesKey() {
  return ['getRecentChanges'] as const
}

export function getGetUserByOrcidKey() {
  return ['getUserByOrcid'] as const
}

export function getGetXrefListKey() {
  return ['getXrefList'] as const
}

export function getListOrganismsKey() {
  return ['listOrganisms'] as const
}

export function getListPathwaysKey() {
  return ['listPathways'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getRemoveCurationTagKey() {
  return ['removeCurationTag'] as const
}

export function getRemoveOntologyTagKey() {
  return ['removeOntologyTag'] as const
}

export function getSaveCurationTagKey() {
  return ['saveCurationTag'] as const
}

export function getSaveOntologyTagKey() {
  return ['saveOntologyTag'] as const
}

export function getUpdatePathwayKey() {
  return ['updatePathway'] as const
}

export function getPostCreatePathwayKey() {
  return ['createPathway', '/createPathway', 'POST'] as const
}

export function usePostCreatePathway<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createPathway.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createPathway.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreatePathwayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createPathway.$post> }) =>
        parseResponse(client.createPathway.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFindInteractionsKey(
  args: InferRequestType<typeof client.findInteractions.$get>,
) {
  return ['findInteractions', '/findInteractions', args] as const
}

export function useGetFindInteractions<TError = unknown>(
  args: InferRequestType<typeof client.findInteractions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindInteractionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findInteractions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindInteractions<TError = unknown>(
  args: InferRequestType<typeof client.findInteractions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindInteractionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findInteractions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findInteractions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFindPathwaysByLiteratureKey(
  args: InferRequestType<typeof client.findPathwaysByLiterature.$get>,
) {
  return ['findPathwaysByLiterature', '/findPathwaysByLiterature', args] as const
}

export function useGetFindPathwaysByLiterature<TError = unknown>(
  args: InferRequestType<typeof client.findPathwaysByLiterature.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindPathwaysByLiteratureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findPathwaysByLiterature.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindPathwaysByLiterature<TError = unknown>(
  args: InferRequestType<typeof client.findPathwaysByLiterature.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindPathwaysByLiteratureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByLiterature.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findPathwaysByLiterature.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFindPathwaysByTextKey(
  args: InferRequestType<typeof client.findPathwaysByText.$get>,
) {
  return ['findPathwaysByText', '/findPathwaysByText', args] as const
}

export function useGetFindPathwaysByText<TError = unknown>(
  args: InferRequestType<typeof client.findPathwaysByText.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindPathwaysByTextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findPathwaysByText.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindPathwaysByText<TError = unknown>(
  args: InferRequestType<typeof client.findPathwaysByText.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindPathwaysByTextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByText.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findPathwaysByText.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFindPathwaysByXrefKey(
  args: InferRequestType<typeof client.findPathwaysByXref.$get>,
) {
  return ['findPathwaysByXref', '/findPathwaysByXref', args] as const
}

export function useGetFindPathwaysByXref<TError = unknown>(
  args: InferRequestType<typeof client.findPathwaysByXref.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindPathwaysByXrefKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findPathwaysByXref.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindPathwaysByXref<TError = unknown>(
  args: InferRequestType<typeof client.findPathwaysByXref.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindPathwaysByXrefKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findPathwaysByXref.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.findPathwaysByXref.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetColoredPathwayKey(
  args: InferRequestType<typeof client.getColoredPathway.$get>,
) {
  return ['getColoredPathway', '/getColoredPathway', args] as const
}

export function useGetGetColoredPathway<TError = unknown>(
  args: InferRequestType<typeof client.getColoredPathway.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetColoredPathwayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getColoredPathway.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetColoredPathway<TError = unknown>(
  args: InferRequestType<typeof client.getColoredPathway.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetColoredPathwayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getColoredPathway.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getColoredPathway.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetCurationTagHistoryKey(
  args: InferRequestType<typeof client.getCurationTagHistory.$get>,
) {
  return ['getCurationTagHistory', '/getCurationTagHistory', args] as const
}

export function useGetGetCurationTagHistory<TError = unknown>(
  args: InferRequestType<typeof client.getCurationTagHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetCurationTagHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getCurationTagHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetCurationTagHistory<TError = unknown>(
  args: InferRequestType<typeof client.getCurationTagHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetCurationTagHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagHistory.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getCurationTagHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetCurationTagsKey(
  args: InferRequestType<typeof client.getCurationTags.$get>,
) {
  return ['getCurationTags', '/getCurationTags', args] as const
}

export function useGetGetCurationTags<TError = unknown>(
  args: InferRequestType<typeof client.getCurationTags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetCurationTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getCurationTags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetCurationTags<TError = unknown>(
  args: InferRequestType<typeof client.getCurationTags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetCurationTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getCurationTags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetCurationTagsByNameKey(
  args: InferRequestType<typeof client.getCurationTagsByName.$get>,
) {
  return ['getCurationTagsByName', '/getCurationTagsByName', args] as const
}

export function useGetGetCurationTagsByName<TError = unknown>(
  args: InferRequestType<typeof client.getCurationTagsByName.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetCurationTagsByNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getCurationTagsByName.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetCurationTagsByName<TError = unknown>(
  args: InferRequestType<typeof client.getCurationTagsByName.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetCurationTagsByNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getCurationTagsByName.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getCurationTagsByName.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetOntologyTermsByPathwayKey(
  args: InferRequestType<typeof client.getOntologyTermsByPathway.$get>,
) {
  return ['getOntologyTermsByPathway', '/getOntologyTermsByPathway', args] as const
}

export function useGetGetOntologyTermsByPathway<TError = unknown>(
  args: InferRequestType<typeof client.getOntologyTermsByPathway.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetOntologyTermsByPathwayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getOntologyTermsByPathway.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetOntologyTermsByPathway<TError = unknown>(
  args: InferRequestType<typeof client.getOntologyTermsByPathway.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetOntologyTermsByPathwayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getOntologyTermsByPathway.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getOntologyTermsByPathway.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetPathwayKey(args: InferRequestType<typeof client.getPathway.$get>) {
  return ['getPathway', '/getPathway', args] as const
}

export function useGetGetPathway<TError = unknown>(
  args: InferRequestType<typeof client.getPathway.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetPathwayKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getPathway.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetPathway<TError = unknown>(
  args: InferRequestType<typeof client.getPathway.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetPathwayKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathway.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getPathway.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetPathwayAsKey(args: InferRequestType<typeof client.getPathwayAs.$get>) {
  return ['getPathwayAs', '/getPathwayAs', args] as const
}

export function useGetGetPathwayAs<TError = unknown>(
  args: InferRequestType<typeof client.getPathwayAs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetPathwayAsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getPathwayAs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetPathwayAs<TError = unknown>(
  args: InferRequestType<typeof client.getPathwayAs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetPathwayAsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayAs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getPathwayAs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetPathwayHistoryKey(
  args: InferRequestType<typeof client.getPathwayHistory.$get>,
) {
  return ['getPathwayHistory', '/getPathwayHistory', args] as const
}

export function useGetGetPathwayHistory<TError = unknown>(
  args: InferRequestType<typeof client.getPathwayHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetPathwayHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getPathwayHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetPathwayHistory<TError = unknown>(
  args: InferRequestType<typeof client.getPathwayHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetPathwayHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayHistory.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getPathwayHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetPathwayInfoKey(args: InferRequestType<typeof client.getPathwayInfo.$get>) {
  return ['getPathwayInfo', '/getPathwayInfo', args] as const
}

export function useGetGetPathwayInfo<TError = unknown>(
  args: InferRequestType<typeof client.getPathwayInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetPathwayInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getPathwayInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetPathwayInfo<TError = unknown>(
  args: InferRequestType<typeof client.getPathwayInfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetPathwayInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getPathwayInfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getPathwayInfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetPathwaysByOntologyTermKey(
  args: InferRequestType<typeof client.getPathwaysByOntologyTerm.$get>,
) {
  return ['getPathwaysByOntologyTerm', '/getPathwaysByOntologyTerm', args] as const
}

export function useGetGetPathwaysByOntologyTerm<TError = unknown>(
  args: InferRequestType<typeof client.getPathwaysByOntologyTerm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetPathwaysByOntologyTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getPathwaysByOntologyTerm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetPathwaysByOntologyTerm<TError = unknown>(
  args: InferRequestType<typeof client.getPathwaysByOntologyTerm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetPathwaysByOntologyTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getPathwaysByOntologyTerm.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getPathwaysByOntologyTerm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetPathwaysByParentOntologyTermKey(
  args: InferRequestType<typeof client.getPathwaysByParentOntologyTerm.$get>,
) {
  return ['getPathwaysByParentOntologyTerm', '/getPathwaysByParentOntologyTerm', args] as const
}

export function useGetGetPathwaysByParentOntologyTerm<TError = unknown>(
  args: InferRequestType<typeof client.getPathwaysByParentOntologyTerm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.getPathwaysByParentOntologyTerm.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetPathwaysByParentOntologyTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.getPathwaysByParentOntologyTerm.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getPathwaysByParentOntologyTerm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetPathwaysByParentOntologyTerm<TError = unknown>(
  args: InferRequestType<typeof client.getPathwaysByParentOntologyTerm.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.getPathwaysByParentOntologyTerm.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetPathwaysByParentOntologyTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.getPathwaysByParentOntologyTerm.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getPathwaysByParentOntologyTerm.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetRecentChangesKey(
  args: InferRequestType<typeof client.getRecentChanges.$get>,
) {
  return ['getRecentChanges', '/getRecentChanges', args] as const
}

export function useGetGetRecentChanges<TError = unknown>(
  args: InferRequestType<typeof client.getRecentChanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetRecentChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getRecentChanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetRecentChanges<TError = unknown>(
  args: InferRequestType<typeof client.getRecentChanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetRecentChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRecentChanges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getRecentChanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetUserByOrcidKey(args: InferRequestType<typeof client.getUserByOrcid.$get>) {
  return ['getUserByOrcid', '/getUserByOrcid', args] as const
}

export function useGetGetUserByOrcid<TError = unknown>(
  args: InferRequestType<typeof client.getUserByOrcid.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetUserByOrcidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getUserByOrcid.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetUserByOrcid<TError = unknown>(
  args: InferRequestType<typeof client.getUserByOrcid.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetUserByOrcidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getUserByOrcid.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getUserByOrcid.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetXrefListKey(args: InferRequestType<typeof client.getXrefList.$get>) {
  return ['getXrefList', '/getXrefList', args] as const
}

export function useGetGetXrefList<TError = unknown>(
  args: InferRequestType<typeof client.getXrefList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetXrefListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getXrefList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetXrefList<TError = unknown>(
  args: InferRequestType<typeof client.getXrefList.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetXrefListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getXrefList.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getXrefList.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListOrganismsKey(args: InferRequestType<typeof client.listOrganisms.$get>) {
  return ['listOrganisms', '/listOrganisms', args] as const
}

export function useGetListOrganisms<TError = unknown>(
  args: InferRequestType<typeof client.listOrganisms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListOrganismsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listOrganisms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListOrganisms<TError = unknown>(
  args: InferRequestType<typeof client.listOrganisms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListOrganismsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listOrganisms.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listOrganisms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListPathwaysKey(args: InferRequestType<typeof client.listPathways.$get>) {
  return ['listPathways', '/listPathways', args] as const
}

export function useGetListPathways<TError = unknown>(
  args: InferRequestType<typeof client.listPathways.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListPathwaysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listPathways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListPathways<TError = unknown>(
  args: InferRequestType<typeof client.listPathways.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListPathwaysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPathways.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listPathways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLoginKey(args: InferRequestType<typeof client.login.$get>) {
  return ['login', '/login', args] as const
}

export function useGetLogin<TError = unknown>(
  args: InferRequestType<typeof client.login.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLoginKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.login.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLogin<TError = unknown>(
  args: InferRequestType<typeof client.login.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLoginKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.login.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRemoveCurationTagKey(
  args: InferRequestType<typeof client.removeCurationTag.$get>,
) {
  return ['removeCurationTag', '/removeCurationTag', args] as const
}

export function useGetRemoveCurationTag<TError = unknown>(
  args: InferRequestType<typeof client.removeCurationTag.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRemoveCurationTagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.removeCurationTag.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRemoveCurationTag<TError = unknown>(
  args: InferRequestType<typeof client.removeCurationTag.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRemoveCurationTagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeCurationTag.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.removeCurationTag.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRemoveOntologyTagKey(
  args: InferRequestType<typeof client.removeOntologyTag.$get>,
) {
  return ['removeOntologyTag', '/removeOntologyTag', args] as const
}

export function useGetRemoveOntologyTag<TError = unknown>(
  args: InferRequestType<typeof client.removeOntologyTag.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRemoveOntologyTagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.removeOntologyTag.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRemoveOntologyTag<TError = unknown>(
  args: InferRequestType<typeof client.removeOntologyTag.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRemoveOntologyTagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.removeOntologyTag.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.removeOntologyTag.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSaveCurationTagKey(
  args: InferRequestType<typeof client.saveCurationTag.$get>,
) {
  return ['saveCurationTag', '/saveCurationTag', args] as const
}

export function useGetSaveCurationTag<TError = unknown>(
  args: InferRequestType<typeof client.saveCurationTag.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSaveCurationTagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saveCurationTag.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSaveCurationTag<TError = unknown>(
  args: InferRequestType<typeof client.saveCurationTag.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSaveCurationTagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveCurationTag.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saveCurationTag.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSaveOntologyTagKey(
  args: InferRequestType<typeof client.saveOntologyTag.$get>,
) {
  return ['saveOntologyTag', '/saveOntologyTag', args] as const
}

export function useGetSaveOntologyTag<TError = unknown>(
  args: InferRequestType<typeof client.saveOntologyTag.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSaveOntologyTagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saveOntologyTag.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSaveOntologyTag<TError = unknown>(
  args: InferRequestType<typeof client.saveOntologyTag.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSaveOntologyTagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveOntologyTag.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saveOntologyTag.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUpdatePathwayKey(args: InferRequestType<typeof client.updatePathway.$get>) {
  return ['updatePathway', '/updatePathway', args] as const
}

export function useGetUpdatePathway<TError = unknown>(
  args: InferRequestType<typeof client.updatePathway.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUpdatePathwayKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.updatePathway.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUpdatePathway<TError = unknown>(
  args: InferRequestType<typeof client.updatePathway.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUpdatePathwayKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updatePathway.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.updatePathway.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
