import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnalyzeKey() {
  return ['analyze'] as const
}

export function getAreaOfInterestKey() {
  return ['areaOfInterest'] as const
}

export function getDescribeKey() {
  return ['describe'] as const
}

export function getDetectKey() {
  return ['detect'] as const
}

export function getGenerateThumbnailKey() {
  return ['generateThumbnail'] as const
}

export function getModelsKey() {
  return ['models'] as const
}

export function getOcrKey() {
  return ['ocr'] as const
}

export function getTagKey() {
  return ['tag'] as const
}

export function getPostAnalyzeMutationKey() {
  return ['analyze', '/analyze', 'POST'] as const
}

export function getPostAnalyzeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyze.$post>>>>>,
    TError,
    InferRequestType<typeof client.analyze.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnalyzeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.analyze.$post>) {
      return parseResponse(client.analyze.$post(args, options))
    },
  })
}

export function usePostAnalyze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyze.$post>>>>>,
        TError,
        InferRequestType<typeof client.analyze.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnalyzeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAreaOfInterestMutationKey() {
  return ['areaOfInterest', '/areaOfInterest', 'POST'] as const
}

export function getPostAreaOfInterestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areaOfInterest.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.areaOfInterest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAreaOfInterestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.areaOfInterest.$post>) {
      return parseResponse(client.areaOfInterest.$post(args, options))
    },
  })
}

export function usePostAreaOfInterest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areaOfInterest.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.areaOfInterest.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAreaOfInterestMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDescribeMutationKey() {
  return ['describe', '/describe', 'POST'] as const
}

export function getPostDescribeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describe.$post>>>>>,
    TError,
    InferRequestType<typeof client.describe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describe.$post>) {
      return parseResponse(client.describe.$post(args, options))
    },
  })
}

export function usePostDescribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.describe.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.describe.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDetectMutationKey() {
  return ['detect', '/detect', 'POST'] as const
}

export function getPostDetectMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detect.$post>>>>>,
    TError,
    InferRequestType<typeof client.detect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDetectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.detect.$post>) {
      return parseResponse(client.detect.$post(args, options))
    },
  })
}

export function usePostDetect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detect.$post>>>>>,
        TError,
        InferRequestType<typeof client.detect.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDetectMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGenerateThumbnailMutationKey() {
  return ['generateThumbnail', '/generateThumbnail', 'POST'] as const
}

export function getPostGenerateThumbnailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generateThumbnail.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.generateThumbnail.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGenerateThumbnailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.generateThumbnail.$post>) {
      return parseResponse(client.generateThumbnail.$post(args, options))
    },
  })
}

export function usePostGenerateThumbnail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.generateThumbnail.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.generateThumbnail.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGenerateThumbnailMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getModelsQueryKey() {
  return ['models', '/models'] as const
}

export function getModelsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getModelsQueryKey>
  >({
    queryKey: getModelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.models.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useModels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getModelsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseModels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getModelsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostModelsModelAnalyzeMutationKey() {
  return ['models', '/models/:model/analyze', 'POST'] as const
}

export function getPostModelsModelAnalyzeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.models)[':model']['analyze']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':model']['analyze']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModelsModelAnalyzeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.models)[':model']['analyze']['$post']>) {
      return parseResponse(client.models[':model'].analyze.$post(args, options))
    },
  })
}

export function usePostModelsModelAnalyze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.models)[':model']['analyze']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.models)[':model']['analyze']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModelsModelAnalyzeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOcrMutationKey() {
  return ['ocr', '/ocr', 'POST'] as const
}

export function getPostOcrMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ocr.$post>>>>>,
    TError,
    InferRequestType<typeof client.ocr.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOcrMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ocr.$post>) {
      return parseResponse(client.ocr.$post(args, options))
    },
  })
}

export function usePostOcr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ocr.$post>>>>>,
        TError,
        InferRequestType<typeof client.ocr.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOcrMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTagMutationKey() {
  return ['tag', '/tag', 'POST'] as const
}

export function getPostTagMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$post>>>>>,
    TError,
    InferRequestType<typeof client.tag.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tag.$post>) {
      return parseResponse(client.tag.$post(args, options))
    },
  })
}

export function usePostTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$post>>>>>,
        TError,
        InferRequestType<typeof client.tag.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
