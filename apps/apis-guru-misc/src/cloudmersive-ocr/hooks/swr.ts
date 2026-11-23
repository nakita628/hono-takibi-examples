import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcrKey() {
  return ['ocr'] as const
}

export function getPostOcrImageToLinesWithLocationKey() {
  return ['ocr', '/ocr/image/to/lines-with-location', 'POST'] as const
}

export function usePostOcrImageToLinesWithLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocr.image.to)['lines-with-location']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocr.image.to)['lines-with-location']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrImageToLinesWithLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ocr.image.to)['lines-with-location']['$post']> },
      ) => parseResponse(client.ocr.image.to['lines-with-location'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrImageToWordsWithLocationKey() {
  return ['ocr', '/ocr/image/to/words-with-location', 'POST'] as const
}

export function usePostOcrImageToWordsWithLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocr.image.to)['words-with-location']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocr.image.to)['words-with-location']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrImageToWordsWithLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ocr.image.to)['words-with-location']['$post']> },
      ) => parseResponse(client.ocr.image.to['words-with-location'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrImageToTextKey() {
  return ['ocr', '/ocr/image/toText', 'POST'] as const
}

export function usePostOcrImageToText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ocr.image.toText.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ocr.image.toText.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrImageToTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ocr.image.toText.$post> }) =>
        parseResponse(client.ocr.image.toText.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPdfToLinesWithLocationKey() {
  return ['ocr', '/ocr/pdf/to/lines-with-location', 'POST'] as const
}

export function usePostOcrPdfToLinesWithLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocr.pdf.to)['lines-with-location']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocr.pdf.to)['lines-with-location']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPdfToLinesWithLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ocr.pdf.to)['lines-with-location']['$post']> },
      ) => parseResponse(client.ocr.pdf.to['lines-with-location'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPdfToWordsWithLocationKey() {
  return ['ocr', '/ocr/pdf/to/words-with-location', 'POST'] as const
}

export function usePostOcrPdfToWordsWithLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocr.pdf.to)['words-with-location']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocr.pdf.to)['words-with-location']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPdfToWordsWithLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ocr.pdf.to)['words-with-location']['$post']> },
      ) => parseResponse(client.ocr.pdf.to['words-with-location'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPdfToTextKey() {
  return ['ocr', '/ocr/pdf/toText', 'POST'] as const
}

export function usePostOcrPdfToText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ocr.pdf.toText.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ocr.pdf.toText.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPdfToTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ocr.pdf.toText.$post> }) =>
        parseResponse(client.ocr.pdf.toText.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPhotoRecognizeBusinessCardKey() {
  return ['ocr', '/ocr/photo/recognize/business-card', 'POST'] as const
}

export function usePostOcrPhotoRecognizeBusinessCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocr.photo.recognize)['business-card']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocr.photo.recognize)['business-card']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPhotoRecognizeBusinessCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ocr.photo.recognize)['business-card']['$post']> },
      ) => parseResponse(client.ocr.photo.recognize['business-card'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPhotoRecognizeFormKey() {
  return ['ocr', '/ocr/photo/recognize/form', 'POST'] as const
}

export function usePostOcrPhotoRecognizeForm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ocr.photo.recognize.form.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ocr.photo.recognize.form.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPhotoRecognizeFormKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ocr.photo.recognize.form.$post> },
      ) => parseResponse(client.ocr.photo.recognize.form.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPhotoRecognizeFormAdvancedKey() {
  return ['ocr', '/ocr/photo/recognize/form/advanced', 'POST'] as const
}

export function usePostOcrPhotoRecognizeFormAdvanced<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ocr.photo.recognize.form.advanced.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ocr.photo.recognize.form.advanced.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPhotoRecognizeFormAdvancedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ocr.photo.recognize.form.advanced.$post> },
      ) => parseResponse(client.ocr.photo.recognize.form.advanced.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPhotoRecognizeReceiptKey() {
  return ['ocr', '/ocr/photo/recognize/receipt', 'POST'] as const
}

export function usePostOcrPhotoRecognizeReceipt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ocr.photo.recognize.receipt.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ocr.photo.recognize.receipt.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPhotoRecognizeReceiptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ocr.photo.recognize.receipt.$post> },
      ) => parseResponse(client.ocr.photo.recognize.receipt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPhotoToWordsWithLocationKey() {
  return ['ocr', '/ocr/photo/to/words-with-location', 'POST'] as const
}

export function usePostOcrPhotoToWordsWithLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocr.photo.to)['words-with-location']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocr.photo.to)['words-with-location']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPhotoToWordsWithLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ocr.photo.to)['words-with-location']['$post']> },
      ) => parseResponse(client.ocr.photo.to['words-with-location'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPhotoToTextKey() {
  return ['ocr', '/ocr/photo/toText', 'POST'] as const
}

export function usePostOcrPhotoToText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ocr.photo.toText.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ocr.photo.toText.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPhotoToTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ocr.photo.toText.$post> }) =>
        parseResponse(client.ocr.photo.toText.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPreprocessingImageBinarizeKey() {
  return ['ocr', '/ocr/preprocessing/image/binarize', 'POST'] as const
}

export function usePostOcrPreprocessingImageBinarize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ocr.preprocessing.image.binarize.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ocr.preprocessing.image.binarize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPreprocessingImageBinarizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ocr.preprocessing.image.binarize.$post> },
      ) => parseResponse(client.ocr.preprocessing.image.binarize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPreprocessingImageBinarizeAdvancedKey() {
  return ['ocr', '/ocr/preprocessing/image/binarize/advanced', 'POST'] as const
}

export function usePostOcrPreprocessingImageBinarizeAdvanced<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ocr.preprocessing.image.binarize.advanced.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ocr.preprocessing.image.binarize.advanced.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPreprocessingImageBinarizeAdvancedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.ocr.preprocessing.image.binarize.advanced.$post> },
      ) =>
        parseResponse(client.ocr.preprocessing.image.binarize.advanced.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPreprocessingImageGetPageAngleKey() {
  return ['ocr', '/ocr/preprocessing/image/get-page-angle', 'POST'] as const
}

export function usePostOcrPreprocessingImageGetPageAngle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ocr.preprocessing.image)['get-page-angle']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ocr.preprocessing.image)['get-page-angle']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPreprocessingImageGetPageAngleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ocr.preprocessing.image)['get-page-angle']['$post']>
        },
      ) =>
        parseResponse(client.ocr.preprocessing.image['get-page-angle'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPreprocessingImageUnrotateKey() {
  return ['ocr', '/ocr/preprocessing/image/unrotate', 'POST'] as const
}

export function usePostOcrPreprocessingImageUnrotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ocr.preprocessing.image.unrotate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ocr.preprocessing.image.unrotate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPreprocessingImageUnrotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ocr.preprocessing.image.unrotate.$post> },
      ) => parseResponse(client.ocr.preprocessing.image.unrotate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPreprocessingImageUnrotateAdvancedKey() {
  return ['ocr', '/ocr/preprocessing/image/unrotate/advanced', 'POST'] as const
}

export function usePostOcrPreprocessingImageUnrotateAdvanced<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ocr.preprocessing.image.unrotate.advanced.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ocr.preprocessing.image.unrotate.advanced.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPreprocessingImageUnrotateAdvancedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.ocr.preprocessing.image.unrotate.advanced.$post> },
      ) =>
        parseResponse(client.ocr.preprocessing.image.unrotate.advanced.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrPreprocessingImageUnskewKey() {
  return ['ocr', '/ocr/preprocessing/image/unskew', 'POST'] as const
}

export function usePostOcrPreprocessingImageUnskew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ocr.preprocessing.image.unskew.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ocr.preprocessing.image.unskew.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrPreprocessingImageUnskewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ocr.preprocessing.image.unskew.$post> },
      ) => parseResponse(client.ocr.preprocessing.image.unskew.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOcrReceiptsPhotoToCsvKey() {
  return ['ocr', '/ocr/receipts/photo/to/csv', 'POST'] as const
}

export function usePostOcrReceiptsPhotoToCsv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ocr.receipts.photo.to.csv.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ocr.receipts.photo.to.csv.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcrReceiptsPhotoToCsvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ocr.receipts.photo.to.csv.$post> },
      ) => parseResponse(client.ocr.receipts.photo.to.csv.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
