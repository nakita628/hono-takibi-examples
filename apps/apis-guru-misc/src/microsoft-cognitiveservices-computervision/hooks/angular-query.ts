import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostAnalyze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyze.$post>>>>>,
        TError,
        InferRequestType<typeof client.analyze.$post>,
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
    const mutationDefaults = getPostAnalyzeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAreaOfInterest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAreaOfInterestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDescribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDescribeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDetect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.detect.$post>>>>>,
        TError,
        InferRequestType<typeof client.detect.$post>,
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
    const mutationDefaults = getPostDetectMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostGenerateThumbnail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGenerateThumbnailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectModels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getModelsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostModelsModelAnalyze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostModelsModelAnalyzeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostOcr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ocr.$post>>>>>,
        TError,
        InferRequestType<typeof client.ocr.$post>,
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
    const mutationDefaults = getPostOcrMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tag.$post>>>>>,
        TError,
        InferRequestType<typeof client.tag.$post>,
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
    const mutationDefaults = getPostTagMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
