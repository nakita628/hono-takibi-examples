import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1p1beta1Key() {
  return ['v1p1beta1'] as const
}

export function getPostV1p1beta1FilesAnnotateMutationKey() {
  return ['v1p1beta1', '/v1p1beta1/files:annotate', 'POST'] as const
}

export function getPostV1p1beta1FilesAnnotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p1beta1)['files:annotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1p1beta1)['files:annotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1p1beta1FilesAnnotateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1p1beta1)['files:annotate']['$post']>) {
      return parseResponse(client.v1p1beta1['files:annotate'].$post(args, options))
    },
  })
}

export function usePostV1p1beta1FilesAnnotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1p1beta1)['files:annotate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1p1beta1)['files:annotate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1p1beta1FilesAnnotateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1p1beta1FilesAsyncBatchAnnotateMutationKey() {
  return ['v1p1beta1', '/v1p1beta1/files:asyncBatchAnnotate', 'POST'] as const
}

export function getPostV1p1beta1FilesAsyncBatchAnnotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p1beta1)['files:asyncBatchAnnotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1p1beta1)['files:asyncBatchAnnotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1p1beta1FilesAsyncBatchAnnotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1p1beta1)['files:asyncBatchAnnotate']['$post']>,
    ) {
      return parseResponse(client.v1p1beta1['files:asyncBatchAnnotate'].$post(args, options))
    },
  })
}

export function usePostV1p1beta1FilesAsyncBatchAnnotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1p1beta1)['files:asyncBatchAnnotate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1p1beta1)['files:asyncBatchAnnotate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1p1beta1FilesAsyncBatchAnnotateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1p1beta1ImagesAnnotateMutationKey() {
  return ['v1p1beta1', '/v1p1beta1/images:annotate', 'POST'] as const
}

export function getPostV1p1beta1ImagesAnnotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p1beta1)['images:annotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1p1beta1)['images:annotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1p1beta1ImagesAnnotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1p1beta1)['images:annotate']['$post']>,
    ) {
      return parseResponse(client.v1p1beta1['images:annotate'].$post(args, options))
    },
  })
}

export function usePostV1p1beta1ImagesAnnotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1p1beta1)['images:annotate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1p1beta1)['images:annotate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1p1beta1ImagesAnnotateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1p1beta1ImagesAsyncBatchAnnotateMutationKey() {
  return ['v1p1beta1', '/v1p1beta1/images:asyncBatchAnnotate', 'POST'] as const
}

export function getPostV1p1beta1ImagesAsyncBatchAnnotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p1beta1)['images:asyncBatchAnnotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1p1beta1)['images:asyncBatchAnnotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1p1beta1ImagesAsyncBatchAnnotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1p1beta1)['images:asyncBatchAnnotate']['$post']>,
    ) {
      return parseResponse(client.v1p1beta1['images:asyncBatchAnnotate'].$post(args, options))
    },
  })
}

export function usePostV1p1beta1ImagesAsyncBatchAnnotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1p1beta1)['images:asyncBatchAnnotate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1p1beta1)['images:asyncBatchAnnotate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1p1beta1ImagesAsyncBatchAnnotateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1p1beta1ParentFilesAnnotateMutationKey() {
  return ['v1p1beta1', '/v1p1beta1/:parent/files:annotate', 'POST'] as const
}

export function getPostV1p1beta1ParentFilesAnnotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p1beta1)[':parent']['files:annotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1p1beta1)[':parent']['files:annotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1p1beta1ParentFilesAnnotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1p1beta1)[':parent']['files:annotate']['$post']>,
    ) {
      return parseResponse(client.v1p1beta1[':parent']['files:annotate'].$post(args, options))
    },
  })
}

export function usePostV1p1beta1ParentFilesAnnotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1p1beta1)[':parent']['files:annotate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1p1beta1)[':parent']['files:annotate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1p1beta1ParentFilesAnnotateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1p1beta1ParentFilesAsyncBatchAnnotateMutationKey() {
  return ['v1p1beta1', '/v1p1beta1/:parent/files:asyncBatchAnnotate', 'POST'] as const
}

export function getPostV1p1beta1ParentFilesAsyncBatchAnnotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1p1beta1)[':parent']['files:asyncBatchAnnotate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1p1beta1)[':parent']['files:asyncBatchAnnotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1p1beta1ParentFilesAsyncBatchAnnotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1p1beta1)[':parent']['files:asyncBatchAnnotate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1p1beta1[':parent']['files:asyncBatchAnnotate'].$post(args, options),
      )
    },
  })
}

export function usePostV1p1beta1ParentFilesAsyncBatchAnnotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1p1beta1)[':parent']['files:asyncBatchAnnotate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1p1beta1)[':parent']['files:asyncBatchAnnotate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1p1beta1ParentFilesAsyncBatchAnnotateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1p1beta1ParentImagesAnnotateMutationKey() {
  return ['v1p1beta1', '/v1p1beta1/:parent/images:annotate', 'POST'] as const
}

export function getPostV1p1beta1ParentImagesAnnotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p1beta1)[':parent']['images:annotate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1p1beta1)[':parent']['images:annotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1p1beta1ParentImagesAnnotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1p1beta1)[':parent']['images:annotate']['$post']>,
    ) {
      return parseResponse(client.v1p1beta1[':parent']['images:annotate'].$post(args, options))
    },
  })
}

export function usePostV1p1beta1ParentImagesAnnotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1p1beta1)[':parent']['images:annotate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1p1beta1)[':parent']['images:annotate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1p1beta1ParentImagesAnnotateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1p1beta1ParentImagesAsyncBatchAnnotateMutationKey() {
  return ['v1p1beta1', '/v1p1beta1/:parent/images:asyncBatchAnnotate', 'POST'] as const
}

export function getPostV1p1beta1ParentImagesAsyncBatchAnnotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1p1beta1)[':parent']['images:asyncBatchAnnotate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1p1beta1)[':parent']['images:asyncBatchAnnotate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1p1beta1ParentImagesAsyncBatchAnnotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1p1beta1)[':parent']['images:asyncBatchAnnotate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1p1beta1[':parent']['images:asyncBatchAnnotate'].$post(args, options),
      )
    },
  })
}

export function usePostV1p1beta1ParentImagesAsyncBatchAnnotate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1p1beta1)[':parent']['images:asyncBatchAnnotate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1p1beta1)[':parent']['images:asyncBatchAnnotate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1p1beta1ParentImagesAsyncBatchAnnotateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
