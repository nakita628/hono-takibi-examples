import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1p1beta1Key() {
  return ['v1p1beta1'] as const
}

export function getPostV1p1beta1FilesAnnotateKey() {
  return ['v1p1beta1', '/v1p1beta1/files:annotate', 'POST'] as const
}

export function usePostV1p1beta1FilesAnnotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p1beta1)['files:annotate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1p1beta1)['files:annotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1p1beta1FilesAnnotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1p1beta1)['files:annotate']['$post']> },
      ) => parseResponse(client.v1p1beta1['files:annotate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1p1beta1FilesAsyncBatchAnnotateKey() {
  return ['v1p1beta1', '/v1p1beta1/files:asyncBatchAnnotate', 'POST'] as const
}

export function usePostV1p1beta1FilesAsyncBatchAnnotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p1beta1)['files:asyncBatchAnnotate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1p1beta1)['files:asyncBatchAnnotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1p1beta1FilesAsyncBatchAnnotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1p1beta1)['files:asyncBatchAnnotate']['$post']>
        },
      ) => parseResponse(client.v1p1beta1['files:asyncBatchAnnotate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1p1beta1ImagesAnnotateKey() {
  return ['v1p1beta1', '/v1p1beta1/images:annotate', 'POST'] as const
}

export function usePostV1p1beta1ImagesAnnotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p1beta1)['images:annotate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1p1beta1)['images:annotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1p1beta1ImagesAnnotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1p1beta1)['images:annotate']['$post']> },
      ) => parseResponse(client.v1p1beta1['images:annotate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1p1beta1ImagesAsyncBatchAnnotateKey() {
  return ['v1p1beta1', '/v1p1beta1/images:asyncBatchAnnotate', 'POST'] as const
}

export function usePostV1p1beta1ImagesAsyncBatchAnnotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p1beta1)['images:asyncBatchAnnotate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1p1beta1)['images:asyncBatchAnnotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1p1beta1ImagesAsyncBatchAnnotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1p1beta1)['images:asyncBatchAnnotate']['$post']>
        },
      ) => parseResponse(client.v1p1beta1['images:asyncBatchAnnotate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1p1beta1ParentFilesAnnotateKey() {
  return ['v1p1beta1', '/v1p1beta1/:parent/files:annotate', 'POST'] as const
}

export function usePostV1p1beta1ParentFilesAnnotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p1beta1)[':parent']['files:annotate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1p1beta1)[':parent']['files:annotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1p1beta1ParentFilesAnnotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1p1beta1)[':parent']['files:annotate']['$post']>
        },
      ) => parseResponse(client.v1p1beta1[':parent']['files:annotate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1p1beta1ParentFilesAsyncBatchAnnotateKey() {
  return ['v1p1beta1', '/v1p1beta1/:parent/files:asyncBatchAnnotate', 'POST'] as const
}

export function usePostV1p1beta1ParentFilesAsyncBatchAnnotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1p1beta1)[':parent']['files:asyncBatchAnnotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1p1beta1ParentFilesAsyncBatchAnnotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1p1beta1)[':parent']['files:asyncBatchAnnotate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1p1beta1[':parent']['files:asyncBatchAnnotate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1p1beta1ParentImagesAnnotateKey() {
  return ['v1p1beta1', '/v1p1beta1/:parent/images:annotate', 'POST'] as const
}

export function usePostV1p1beta1ParentImagesAnnotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p1beta1)[':parent']['images:annotate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1p1beta1)[':parent']['images:annotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1p1beta1ParentImagesAnnotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1p1beta1)[':parent']['images:annotate']['$post']>
        },
      ) => parseResponse(client.v1p1beta1[':parent']['images:annotate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1p1beta1ParentImagesAsyncBatchAnnotateKey() {
  return ['v1p1beta1', '/v1p1beta1/:parent/images:asyncBatchAnnotate', 'POST'] as const
}

export function usePostV1p1beta1ParentImagesAsyncBatchAnnotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1p1beta1)[':parent']['images:asyncBatchAnnotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1p1beta1ParentImagesAsyncBatchAnnotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1p1beta1)[':parent']['images:asyncBatchAnnotate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1p1beta1[':parent']['images:asyncBatchAnnotate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
