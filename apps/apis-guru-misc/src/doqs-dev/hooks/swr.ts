import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDesignerKey() {
  return ['designer'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getGetDesignerTemplatesIndexKey(
  args: InferRequestType<typeof client.designer.templates.index.$get>,
) {
  return ['designer', '/designer/templates/', args] as const
}

export function useGetDesignerTemplatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.designer.templates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDesignerTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.designer.templates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDesignerTemplatesIndex<TError = unknown>(
  args: InferRequestType<typeof client.designer.templates.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDesignerTemplatesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.designer.templates.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDesignerTemplatesIndexKey() {
  return ['designer', '/designer/templates/', 'POST'] as const
}

export function usePostDesignerTemplatesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.designer.templates.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDesignerTemplatesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.designer.templates.index.$post> },
      ) => parseResponse(client.designer.templates.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDesignerTemplatesPreviewKey() {
  return ['designer', '/designer/templates/preview', 'POST'] as const
}

export function usePostDesignerTemplatesPreview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.designer.templates.preview.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.designer.templates.preview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDesignerTemplatesPreviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.designer.templates.preview.$post> },
      ) => parseResponse(client.designer.templates.preview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDesignerTemplatesIdKey(
  args: InferRequestType<(typeof client.designer.templates)[':id']['$get']>,
) {
  return ['designer', '/designer/templates/:id', args] as const
}

export function useGetDesignerTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.designer.templates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.designer.templates)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDesignerTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.designer.templates)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.designer.templates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDesignerTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.designer.templates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.designer.templates)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDesignerTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.designer.templates)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.designer.templates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDesignerTemplatesIdKey() {
  return ['designer', '/designer/templates/:id', 'PUT'] as const
}

export function usePutDesignerTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.designer.templates)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.designer.templates)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDesignerTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.designer.templates)[':id']['$put']> },
      ) => parseResponse(client.designer.templates[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDesignerTemplatesIdKey() {
  return ['designer', '/designer/templates/:id', 'DELETE'] as const
}

export function useDeleteDesignerTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.designer.templates)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.designer.templates)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDesignerTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.designer.templates)[':id']['$delete']> },
      ) => parseResponse(client.designer.templates[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDesignerTemplatesIdGenerateKey() {
  return ['designer', '/designer/templates/:id/generate', 'POST'] as const
}

export function usePostDesignerTemplatesIdGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.designer.templates)[':id']['generate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.designer.templates)[':id']['generate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDesignerTemplatesIdGenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.designer.templates)[':id']['generate']['$post']>
        },
      ) => parseResponse(client.designer.templates[':id'].generate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesKey(args: InferRequestType<typeof client.templates.$get>) {
  return ['templates', '/templates', args] as const
}

export function useGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplates<TError = unknown>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplatesKey() {
  return ['templates', '/templates', 'POST'] as const
}

export function usePostTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.templates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.$post> }) =>
        parseResponse(client.templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesIdKey(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
) {
  return ['templates', '/templates/:id', args] as const
}

export function useGetTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplatesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTemplatesIdKey() {
  return ['templates', '/templates/:id', 'PUT'] as const
}

export function usePutTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':id']['$put']> },
      ) => parseResponse(client.templates[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTemplatesIdKey() {
  return ['templates', '/templates/:id', 'DELETE'] as const
}

export function useDeleteTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':id']['$delete']> },
      ) => parseResponse(client.templates[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplatesIdFileKey(
  args: InferRequestType<(typeof client.templates)[':id']['file']['$get']>,
) {
  return ['templates', '/templates/:id/file', args] as const
}

export function useGetTemplatesIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.templates)[':id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTemplatesIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':id']['file']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates[':id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplatesIdFillKey() {
  return ['templates', '/templates/:id/fill', 'POST'] as const
}

export function usePostTemplatesIdFill<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['fill']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)[':id']['fill']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesIdFillKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)[':id']['fill']['$post']> },
      ) => parseResponse(client.templates[':id'].fill.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
