import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getProjectIdKey() {
  return ['{projectId}'] as const
}

export function getPostProjectIdClassifyIterationsPublishedNameImageKey() {
  return [':projectId', '/:projectId/classify/iterations/:publishedName/image', 'POST'] as const
}

export function usePostProjectIdClassifyIterationsPublishedNameImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectIdClassifyIterationsPublishedNameImageKey()
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
            (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':projectId'].classify.iterations[':publishedName'].image.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectIdClassifyIterationsPublishedNameImageNostoreKey() {
  return [
    ':projectId',
    '/:projectId/classify/iterations/:publishedName/image/nostore',
    'POST',
  ] as const
}

export function usePostProjectIdClassifyIterationsPublishedNameImageNostore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['nostore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['nostore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectIdClassifyIterationsPublishedNameImageNostoreKey()
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
            (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['nostore']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':projectId'].classify.iterations[':publishedName'].image.nostore.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectIdClassifyIterationsPublishedNameUrlKey() {
  return [':projectId', '/:projectId/classify/iterations/:publishedName/url', 'POST'] as const
}

export function usePostProjectIdClassifyIterationsPublishedNameUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectIdClassifyIterationsPublishedNameUrlKey()
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
            (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':projectId'].classify.iterations[':publishedName'].url.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectIdClassifyIterationsPublishedNameUrlNostoreKey() {
  return [
    ':projectId',
    '/:projectId/classify/iterations/:publishedName/url/nostore',
    'POST',
  ] as const
}

export function usePostProjectIdClassifyIterationsPublishedNameUrlNostore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['nostore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['nostore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectIdClassifyIterationsPublishedNameUrlNostoreKey()
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
            (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['nostore']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':projectId'].classify.iterations[':publishedName'].url.nostore.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectIdDetectIterationsPublishedNameImageKey() {
  return [':projectId', '/:projectId/detect/iterations/:publishedName/image', 'POST'] as const
}

export function usePostProjectIdDetectIterationsPublishedNameImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectIdDetectIterationsPublishedNameImageKey()
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
            (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':projectId'].detect.iterations[':publishedName'].image.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectIdDetectIterationsPublishedNameImageNostoreKey() {
  return [
    ':projectId',
    '/:projectId/detect/iterations/:publishedName/image/nostore',
    'POST',
  ] as const
}

export function usePostProjectIdDetectIterationsPublishedNameImageNostore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['nostore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['nostore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectIdDetectIterationsPublishedNameImageNostoreKey()
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
            (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['nostore']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':projectId'].detect.iterations[':publishedName'].image.nostore.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectIdDetectIterationsPublishedNameUrlKey() {
  return [':projectId', '/:projectId/detect/iterations/:publishedName/url', 'POST'] as const
}

export function usePostProjectIdDetectIterationsPublishedNameUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectIdDetectIterationsPublishedNameUrlKey()
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
            (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':projectId'].detect.iterations[':publishedName'].url.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectIdDetectIterationsPublishedNameUrlNostoreKey() {
  return [':projectId', '/:projectId/detect/iterations/:publishedName/url/nostore', 'POST'] as const
}

export function usePostProjectIdDetectIterationsPublishedNameUrlNostore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['nostore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['nostore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectIdDetectIterationsPublishedNameUrlNostoreKey()
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
            (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['nostore']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':projectId'].detect.iterations[':publishedName'].url.nostore.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
