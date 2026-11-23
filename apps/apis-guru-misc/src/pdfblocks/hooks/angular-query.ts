import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1AddPasswordMutationKey() {
  return ['v1', '/v1/add_password', 'POST'] as const
}

export function getPostV1AddPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.add_password.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.add_password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AddPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.add_password.$post>) {
      return parseResponse(client.v1.add_password.$post(args, options))
    },
  })
}

export function injectPostV1AddPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.add_password.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.add_password.$post>,
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
    const mutationDefaults = getPostV1AddPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AddRestrictionsMutationKey() {
  return ['v1', '/v1/add_restrictions', 'POST'] as const
}

export function getPostV1AddRestrictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.add_restrictions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.add_restrictions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AddRestrictionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.add_restrictions.$post>) {
      return parseResponse(client.v1.add_restrictions.$post(args, options))
    },
  })
}

export function injectPostV1AddRestrictions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.add_restrictions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.add_restrictions.$post>,
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
    const mutationDefaults = getPostV1AddRestrictionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AddWatermarkImageMutationKey() {
  return ['v1', '/v1/add_watermark/image', 'POST'] as const
}

export function getPostV1AddWatermarkImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.add_watermark.image.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.add_watermark.image.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AddWatermarkImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.add_watermark.image.$post>) {
      return parseResponse(client.v1.add_watermark.image.$post(args, options))
    },
  })
}

export function injectPostV1AddWatermarkImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.add_watermark.image.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.add_watermark.image.$post>,
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
    const mutationDefaults = getPostV1AddWatermarkImageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1AddWatermarkTextMutationKey() {
  return ['v1', '/v1/add_watermark/text', 'POST'] as const
}

export function getPostV1AddWatermarkTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.add_watermark.text.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.add_watermark.text.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AddWatermarkTextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.add_watermark.text.$post>) {
      return parseResponse(client.v1.add_watermark.text.$post(args, options))
    },
  })
}

export function injectPostV1AddWatermarkText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.add_watermark.text.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.add_watermark.text.$post>,
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
    const mutationDefaults = getPostV1AddWatermarkTextMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ExtractPagesMutationKey() {
  return ['v1', '/v1/extract_pages', 'POST'] as const
}

export function getPostV1ExtractPagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.extract_pages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.extract_pages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ExtractPagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.extract_pages.$post>) {
      return parseResponse(client.v1.extract_pages.$post(args, options))
    },
  })
}

export function injectPostV1ExtractPages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.extract_pages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.extract_pages.$post>,
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
    const mutationDefaults = getPostV1ExtractPagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1MergeDocumentsMutationKey() {
  return ['v1', '/v1/merge_documents', 'POST'] as const
}

export function getPostV1MergeDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.merge_documents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.merge_documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MergeDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.merge_documents.$post>) {
      return parseResponse(client.v1.merge_documents.$post(args, options))
    },
  })
}

export function injectPostV1MergeDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.merge_documents.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.merge_documents.$post>,
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
    const mutationDefaults = getPostV1MergeDocumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1RemovePagesMutationKey() {
  return ['v1', '/v1/remove_pages', 'POST'] as const
}

export function getPostV1RemovePagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.remove_pages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.remove_pages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RemovePagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.remove_pages.$post>) {
      return parseResponse(client.v1.remove_pages.$post(args, options))
    },
  })
}

export function injectPostV1RemovePages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.remove_pages.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.remove_pages.$post>,
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
    const mutationDefaults = getPostV1RemovePagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1RemovePasswordMutationKey() {
  return ['v1', '/v1/remove_password', 'POST'] as const
}

export function getPostV1RemovePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.remove_password.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.remove_password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RemovePasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.remove_password.$post>) {
      return parseResponse(client.v1.remove_password.$post(args, options))
    },
  })
}

export function injectPostV1RemovePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.remove_password.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.remove_password.$post>,
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
    const mutationDefaults = getPostV1RemovePasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1RemoveRestrictionsMutationKey() {
  return ['v1', '/v1/remove_restrictions', 'POST'] as const
}

export function getPostV1RemoveRestrictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.remove_restrictions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.remove_restrictions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RemoveRestrictionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.remove_restrictions.$post>) {
      return parseResponse(client.v1.remove_restrictions.$post(args, options))
    },
  })
}

export function injectPostV1RemoveRestrictions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.remove_restrictions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.remove_restrictions.$post>,
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
    const mutationDefaults = getPostV1RemoveRestrictionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1RemoveSignaturesMutationKey() {
  return ['v1', '/v1/remove_signatures', 'POST'] as const
}

export function getPostV1RemoveSignaturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.remove_signatures.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.remove_signatures.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RemoveSignaturesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.remove_signatures.$post>) {
      return parseResponse(client.v1.remove_signatures.$post(args, options))
    },
  })
}

export function injectPostV1RemoveSignatures<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.remove_signatures.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.remove_signatures.$post>,
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
    const mutationDefaults = getPostV1RemoveSignaturesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ReversePagesMutationKey() {
  return ['v1', '/v1/reverse_pages', 'POST'] as const
}

export function getPostV1ReversePagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reverse_pages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.reverse_pages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ReversePagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.reverse_pages.$post>) {
      return parseResponse(client.v1.reverse_pages.$post(args, options))
    },
  })
}

export function injectPostV1ReversePages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.reverse_pages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.reverse_pages.$post>,
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
    const mutationDefaults = getPostV1ReversePagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1RotatePagesMutationKey() {
  return ['v1', '/v1/rotate_pages', 'POST'] as const
}

export function getPostV1RotatePagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rotate_pages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.rotate_pages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RotatePagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.rotate_pages.$post>) {
      return parseResponse(client.v1.rotate_pages.$post(args, options))
    },
  })
}

export function injectPostV1RotatePages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rotate_pages.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.rotate_pages.$post>,
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
    const mutationDefaults = getPostV1RotatePagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
