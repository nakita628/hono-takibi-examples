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

export function getOcrKey() {
  return ['ocr'] as const
}

export function getPostOcrImageToLinesWithLocationMutationKey() {
  return ['ocr', '/ocr/image/to/lines-with-location', 'POST'] as const
}

export function getPostOcrImageToLinesWithLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocr.image.to)['lines-with-location']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocr.image.to)['lines-with-location']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrImageToLinesWithLocationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocr.image.to)['lines-with-location']['$post']>,
    ) {
      return parseResponse(client.ocr.image.to['lines-with-location'].$post(args, options))
    },
  })
}

export function injectPostOcrImageToLinesWithLocation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocr.image.to)['lines-with-location']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocr.image.to)['lines-with-location']['$post']>,
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
    const mutationDefaults = getPostOcrImageToLinesWithLocationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrImageToWordsWithLocationMutationKey() {
  return ['ocr', '/ocr/image/to/words-with-location', 'POST'] as const
}

export function getPostOcrImageToWordsWithLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocr.image.to)['words-with-location']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocr.image.to)['words-with-location']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrImageToWordsWithLocationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocr.image.to)['words-with-location']['$post']>,
    ) {
      return parseResponse(client.ocr.image.to['words-with-location'].$post(args, options))
    },
  })
}

export function injectPostOcrImageToWordsWithLocation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocr.image.to)['words-with-location']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocr.image.to)['words-with-location']['$post']>,
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
    const mutationDefaults = getPostOcrImageToWordsWithLocationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrImageToTextMutationKey() {
  return ['ocr', '/ocr/image/toText', 'POST'] as const
}

export function getPostOcrImageToTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ocr.image.toText.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ocr.image.toText.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrImageToTextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ocr.image.toText.$post>) {
      return parseResponse(client.ocr.image.toText.$post(args, options))
    },
  })
}

export function injectPostOcrImageToText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ocr.image.toText.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ocr.image.toText.$post>,
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
    const mutationDefaults = getPostOcrImageToTextMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPdfToLinesWithLocationMutationKey() {
  return ['ocr', '/ocr/pdf/to/lines-with-location', 'POST'] as const
}

export function getPostOcrPdfToLinesWithLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocr.pdf.to)['lines-with-location']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocr.pdf.to)['lines-with-location']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPdfToLinesWithLocationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocr.pdf.to)['lines-with-location']['$post']>,
    ) {
      return parseResponse(client.ocr.pdf.to['lines-with-location'].$post(args, options))
    },
  })
}

export function injectPostOcrPdfToLinesWithLocation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocr.pdf.to)['lines-with-location']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocr.pdf.to)['lines-with-location']['$post']>,
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
    const mutationDefaults = getPostOcrPdfToLinesWithLocationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPdfToWordsWithLocationMutationKey() {
  return ['ocr', '/ocr/pdf/to/words-with-location', 'POST'] as const
}

export function getPostOcrPdfToWordsWithLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocr.pdf.to)['words-with-location']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocr.pdf.to)['words-with-location']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPdfToWordsWithLocationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocr.pdf.to)['words-with-location']['$post']>,
    ) {
      return parseResponse(client.ocr.pdf.to['words-with-location'].$post(args, options))
    },
  })
}

export function injectPostOcrPdfToWordsWithLocation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocr.pdf.to)['words-with-location']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocr.pdf.to)['words-with-location']['$post']>,
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
    const mutationDefaults = getPostOcrPdfToWordsWithLocationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPdfToTextMutationKey() {
  return ['ocr', '/ocr/pdf/toText', 'POST'] as const
}

export function getPostOcrPdfToTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ocr.pdf.toText.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ocr.pdf.toText.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPdfToTextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ocr.pdf.toText.$post>) {
      return parseResponse(client.ocr.pdf.toText.$post(args, options))
    },
  })
}

export function injectPostOcrPdfToText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ocr.pdf.toText.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ocr.pdf.toText.$post>,
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
    const mutationDefaults = getPostOcrPdfToTextMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPhotoRecognizeBusinessCardMutationKey() {
  return ['ocr', '/ocr/photo/recognize/business-card', 'POST'] as const
}

export function getPostOcrPhotoRecognizeBusinessCardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocr.photo.recognize)['business-card']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocr.photo.recognize)['business-card']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPhotoRecognizeBusinessCardMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocr.photo.recognize)['business-card']['$post']>,
    ) {
      return parseResponse(client.ocr.photo.recognize['business-card'].$post(args, options))
    },
  })
}

export function injectPostOcrPhotoRecognizeBusinessCard<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocr.photo.recognize)['business-card']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocr.photo.recognize)['business-card']['$post']>,
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
    const mutationDefaults = getPostOcrPhotoRecognizeBusinessCardMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPhotoRecognizeFormMutationKey() {
  return ['ocr', '/ocr/photo/recognize/form', 'POST'] as const
}

export function getPostOcrPhotoRecognizeFormMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ocr.photo.recognize.form.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ocr.photo.recognize.form.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPhotoRecognizeFormMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ocr.photo.recognize.form.$post>) {
      return parseResponse(client.ocr.photo.recognize.form.$post(args, options))
    },
  })
}

export function injectPostOcrPhotoRecognizeForm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ocr.photo.recognize.form.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ocr.photo.recognize.form.$post>,
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
    const mutationDefaults = getPostOcrPhotoRecognizeFormMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPhotoRecognizeFormAdvancedMutationKey() {
  return ['ocr', '/ocr/photo/recognize/form/advanced', 'POST'] as const
}

export function getPostOcrPhotoRecognizeFormAdvancedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ocr.photo.recognize.form.advanced.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ocr.photo.recognize.form.advanced.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPhotoRecognizeFormAdvancedMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.ocr.photo.recognize.form.advanced.$post>,
    ) {
      return parseResponse(client.ocr.photo.recognize.form.advanced.$post(args, options))
    },
  })
}

export function injectPostOcrPhotoRecognizeFormAdvanced<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ocr.photo.recognize.form.advanced.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ocr.photo.recognize.form.advanced.$post>,
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
    const mutationDefaults = getPostOcrPhotoRecognizeFormAdvancedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPhotoRecognizeReceiptMutationKey() {
  return ['ocr', '/ocr/photo/recognize/receipt', 'POST'] as const
}

export function getPostOcrPhotoRecognizeReceiptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ocr.photo.recognize.receipt.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ocr.photo.recognize.receipt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPhotoRecognizeReceiptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ocr.photo.recognize.receipt.$post>) {
      return parseResponse(client.ocr.photo.recognize.receipt.$post(args, options))
    },
  })
}

export function injectPostOcrPhotoRecognizeReceipt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ocr.photo.recognize.receipt.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ocr.photo.recognize.receipt.$post>,
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
    const mutationDefaults = getPostOcrPhotoRecognizeReceiptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPhotoToWordsWithLocationMutationKey() {
  return ['ocr', '/ocr/photo/to/words-with-location', 'POST'] as const
}

export function getPostOcrPhotoToWordsWithLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocr.photo.to)['words-with-location']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocr.photo.to)['words-with-location']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPhotoToWordsWithLocationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocr.photo.to)['words-with-location']['$post']>,
    ) {
      return parseResponse(client.ocr.photo.to['words-with-location'].$post(args, options))
    },
  })
}

export function injectPostOcrPhotoToWordsWithLocation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ocr.photo.to)['words-with-location']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocr.photo.to)['words-with-location']['$post']>,
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
    const mutationDefaults = getPostOcrPhotoToWordsWithLocationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPhotoToTextMutationKey() {
  return ['ocr', '/ocr/photo/toText', 'POST'] as const
}

export function getPostOcrPhotoToTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ocr.photo.toText.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ocr.photo.toText.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPhotoToTextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ocr.photo.toText.$post>) {
      return parseResponse(client.ocr.photo.toText.$post(args, options))
    },
  })
}

export function injectPostOcrPhotoToText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ocr.photo.toText.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ocr.photo.toText.$post>,
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
    const mutationDefaults = getPostOcrPhotoToTextMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPreprocessingImageBinarizeMutationKey() {
  return ['ocr', '/ocr/preprocessing/image/binarize', 'POST'] as const
}

export function getPostOcrPreprocessingImageBinarizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ocr.preprocessing.image.binarize.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ocr.preprocessing.image.binarize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPreprocessingImageBinarizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ocr.preprocessing.image.binarize.$post>) {
      return parseResponse(client.ocr.preprocessing.image.binarize.$post(args, options))
    },
  })
}

export function injectPostOcrPreprocessingImageBinarize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ocr.preprocessing.image.binarize.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ocr.preprocessing.image.binarize.$post>,
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
    const mutationDefaults = getPostOcrPreprocessingImageBinarizeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPreprocessingImageBinarizeAdvancedMutationKey() {
  return ['ocr', '/ocr/preprocessing/image/binarize/advanced', 'POST'] as const
}

export function getPostOcrPreprocessingImageBinarizeAdvancedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ocr.preprocessing.image.binarize.advanced.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ocr.preprocessing.image.binarize.advanced.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPreprocessingImageBinarizeAdvancedMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.ocr.preprocessing.image.binarize.advanced.$post>,
    ) {
      return parseResponse(client.ocr.preprocessing.image.binarize.advanced.$post(args, options))
    },
  })
}

export function injectPostOcrPreprocessingImageBinarizeAdvanced<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ocr.preprocessing.image.binarize.advanced.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ocr.preprocessing.image.binarize.advanced.$post>,
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
    const mutationDefaults = getPostOcrPreprocessingImageBinarizeAdvancedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPreprocessingImageGetPageAngleMutationKey() {
  return ['ocr', '/ocr/preprocessing/image/get-page-angle', 'POST'] as const
}

export function getPostOcrPreprocessingImageGetPageAngleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocr.preprocessing.image)['get-page-angle']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ocr.preprocessing.image)['get-page-angle']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPreprocessingImageGetPageAngleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ocr.preprocessing.image)['get-page-angle']['$post']>,
    ) {
      return parseResponse(client.ocr.preprocessing.image['get-page-angle'].$post(args, options))
    },
  })
}

export function injectPostOcrPreprocessingImageGetPageAngle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ocr.preprocessing.image)['get-page-angle']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ocr.preprocessing.image)['get-page-angle']['$post']>,
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
    const mutationDefaults = getPostOcrPreprocessingImageGetPageAngleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPreprocessingImageUnrotateMutationKey() {
  return ['ocr', '/ocr/preprocessing/image/unrotate', 'POST'] as const
}

export function getPostOcrPreprocessingImageUnrotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ocr.preprocessing.image.unrotate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ocr.preprocessing.image.unrotate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPreprocessingImageUnrotateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ocr.preprocessing.image.unrotate.$post>) {
      return parseResponse(client.ocr.preprocessing.image.unrotate.$post(args, options))
    },
  })
}

export function injectPostOcrPreprocessingImageUnrotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ocr.preprocessing.image.unrotate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ocr.preprocessing.image.unrotate.$post>,
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
    const mutationDefaults = getPostOcrPreprocessingImageUnrotateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPreprocessingImageUnrotateAdvancedMutationKey() {
  return ['ocr', '/ocr/preprocessing/image/unrotate/advanced', 'POST'] as const
}

export function getPostOcrPreprocessingImageUnrotateAdvancedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ocr.preprocessing.image.unrotate.advanced.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ocr.preprocessing.image.unrotate.advanced.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPreprocessingImageUnrotateAdvancedMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.ocr.preprocessing.image.unrotate.advanced.$post>,
    ) {
      return parseResponse(client.ocr.preprocessing.image.unrotate.advanced.$post(args, options))
    },
  })
}

export function injectPostOcrPreprocessingImageUnrotateAdvanced<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ocr.preprocessing.image.unrotate.advanced.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ocr.preprocessing.image.unrotate.advanced.$post>,
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
    const mutationDefaults = getPostOcrPreprocessingImageUnrotateAdvancedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrPreprocessingImageUnskewMutationKey() {
  return ['ocr', '/ocr/preprocessing/image/unskew', 'POST'] as const
}

export function getPostOcrPreprocessingImageUnskewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ocr.preprocessing.image.unskew.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ocr.preprocessing.image.unskew.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrPreprocessingImageUnskewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ocr.preprocessing.image.unskew.$post>) {
      return parseResponse(client.ocr.preprocessing.image.unskew.$post(args, options))
    },
  })
}

export function injectPostOcrPreprocessingImageUnskew<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ocr.preprocessing.image.unskew.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ocr.preprocessing.image.unskew.$post>,
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
    const mutationDefaults = getPostOcrPreprocessingImageUnskewMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostOcrReceiptsPhotoToCsvMutationKey() {
  return ['ocr', '/ocr/receipts/photo/to/csv', 'POST'] as const
}

export function getPostOcrReceiptsPhotoToCsvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ocr.receipts.photo.to.csv.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ocr.receipts.photo.to.csv.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrReceiptsPhotoToCsvMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ocr.receipts.photo.to.csv.$post>) {
      return parseResponse(client.ocr.receipts.photo.to.csv.$post(args, options))
    },
  })
}

export function injectPostOcrReceiptsPhotoToCsv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ocr.receipts.photo.to.csv.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ocr.receipts.photo.to.csv.$post>,
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
    const mutationDefaults = getPostOcrReceiptsPhotoToCsvMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
