import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1AddPasswordKey() {
  return ['v1', '/v1/add_password', 'POST'] as const
}

export function usePostV1AddPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.add_password.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.add_password.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AddPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.add_password.$post> }) =>
        parseResponse(client.v1.add_password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AddRestrictionsKey() {
  return ['v1', '/v1/add_restrictions', 'POST'] as const
}

export function usePostV1AddRestrictions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.add_restrictions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.add_restrictions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AddRestrictionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.add_restrictions.$post> }) =>
        parseResponse(client.v1.add_restrictions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AddWatermarkImageKey() {
  return ['v1', '/v1/add_watermark/image', 'POST'] as const
}

export function usePostV1AddWatermarkImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.add_watermark.image.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.add_watermark.image.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AddWatermarkImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.add_watermark.image.$post> },
      ) => parseResponse(client.v1.add_watermark.image.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AddWatermarkTextKey() {
  return ['v1', '/v1/add_watermark/text', 'POST'] as const
}

export function usePostV1AddWatermarkText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.add_watermark.text.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.add_watermark.text.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AddWatermarkTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.add_watermark.text.$post> },
      ) => parseResponse(client.v1.add_watermark.text.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ExtractPagesKey() {
  return ['v1', '/v1/extract_pages', 'POST'] as const
}

export function usePostV1ExtractPages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.extract_pages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.extract_pages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ExtractPagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.extract_pages.$post> }) =>
        parseResponse(client.v1.extract_pages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MergeDocumentsKey() {
  return ['v1', '/v1/merge_documents', 'POST'] as const
}

export function usePostV1MergeDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.merge_documents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.merge_documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MergeDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.merge_documents.$post> }) =>
        parseResponse(client.v1.merge_documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RemovePagesKey() {
  return ['v1', '/v1/remove_pages', 'POST'] as const
}

export function usePostV1RemovePages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.remove_pages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.remove_pages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RemovePagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.remove_pages.$post> }) =>
        parseResponse(client.v1.remove_pages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RemovePasswordKey() {
  return ['v1', '/v1/remove_password', 'POST'] as const
}

export function usePostV1RemovePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.remove_password.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.remove_password.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RemovePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.remove_password.$post> }) =>
        parseResponse(client.v1.remove_password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RemoveRestrictionsKey() {
  return ['v1', '/v1/remove_restrictions', 'POST'] as const
}

export function usePostV1RemoveRestrictions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.remove_restrictions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.remove_restrictions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RemoveRestrictionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.remove_restrictions.$post> },
      ) => parseResponse(client.v1.remove_restrictions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RemoveSignaturesKey() {
  return ['v1', '/v1/remove_signatures', 'POST'] as const
}

export function usePostV1RemoveSignatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.remove_signatures.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.remove_signatures.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RemoveSignaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.remove_signatures.$post> },
      ) => parseResponse(client.v1.remove_signatures.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ReversePagesKey() {
  return ['v1', '/v1/reverse_pages', 'POST'] as const
}

export function usePostV1ReversePages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reverse_pages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.reverse_pages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ReversePagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.reverse_pages.$post> }) =>
        parseResponse(client.v1.reverse_pages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RotatePagesKey() {
  return ['v1', '/v1/rotate_pages', 'POST'] as const
}

export function usePostV1RotatePages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rotate_pages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.rotate_pages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RotatePagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.rotate_pages.$post> }) =>
        parseResponse(client.v1.rotate_pages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
