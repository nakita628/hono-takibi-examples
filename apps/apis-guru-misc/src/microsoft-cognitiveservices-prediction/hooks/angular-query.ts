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

export function getProjectIdKey() {
  return ['{projectId}'] as const
}

export function getPostProjectIdClassifyIterationsPublishedNameImageMutationKey() {
  return [':projectId', '/:projectId/classify/iterations/:publishedName/image', 'POST'] as const
}

export function getPostProjectIdClassifyIterationsPublishedNameImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectIdClassifyIterationsPublishedNameImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['$post']
      >,
    ) {
      return parseResponse(
        client[':projectId'].classify.iterations[':publishedName'].image.$post(args, options),
      )
    },
  })
}

export function injectPostProjectIdClassifyIterationsPublishedNameImage<
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
                ReturnType<
                  (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['$post']
        >,
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
    const mutationDefaults = getPostProjectIdClassifyIterationsPublishedNameImageMutationOptions<
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

export function getPostProjectIdClassifyIterationsPublishedNameImageNostoreMutationKey() {
  return [
    ':projectId',
    '/:projectId/classify/iterations/:publishedName/image/nostore',
    'POST',
  ] as const
}

export function getPostProjectIdClassifyIterationsPublishedNameImageNostoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['nostore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectIdClassifyIterationsPublishedNameImageNostoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['nostore']['$post']
      >,
    ) {
      return parseResponse(
        client[':projectId'].classify.iterations[':publishedName'].image.nostore.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostProjectIdClassifyIterationsPublishedNameImageNostore<
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
                ReturnType<
                  (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['nostore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['nostore']['$post']
        >,
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
    const mutationDefaults =
      getPostProjectIdClassifyIterationsPublishedNameImageNostoreMutationOptions<
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

export function getPostProjectIdClassifyIterationsPublishedNameUrlMutationKey() {
  return [':projectId', '/:projectId/classify/iterations/:publishedName/url', 'POST'] as const
}

export function getPostProjectIdClassifyIterationsPublishedNameUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectIdClassifyIterationsPublishedNameUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['$post']
      >,
    ) {
      return parseResponse(
        client[':projectId'].classify.iterations[':publishedName'].url.$post(args, options),
      )
    },
  })
}

export function injectPostProjectIdClassifyIterationsPublishedNameUrl<
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
                ReturnType<
                  (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['$post']
        >,
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
    const mutationDefaults = getPostProjectIdClassifyIterationsPublishedNameUrlMutationOptions<
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

export function getPostProjectIdClassifyIterationsPublishedNameUrlNostoreMutationKey() {
  return [
    ':projectId',
    '/:projectId/classify/iterations/:publishedName/url/nostore',
    'POST',
  ] as const
}

export function getPostProjectIdClassifyIterationsPublishedNameUrlNostoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['nostore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectIdClassifyIterationsPublishedNameUrlNostoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['nostore']['$post']
      >,
    ) {
      return parseResponse(
        client[':projectId'].classify.iterations[':publishedName'].url.nostore.$post(args, options),
      )
    },
  })
}

export function injectPostProjectIdClassifyIterationsPublishedNameUrlNostore<
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
                ReturnType<
                  (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['nostore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['nostore']['$post']
        >,
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
    const mutationDefaults =
      getPostProjectIdClassifyIterationsPublishedNameUrlNostoreMutationOptions<
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

export function getPostProjectIdDetectIterationsPublishedNameImageMutationKey() {
  return [':projectId', '/:projectId/detect/iterations/:publishedName/image', 'POST'] as const
}

export function getPostProjectIdDetectIterationsPublishedNameImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectIdDetectIterationsPublishedNameImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['$post']
      >,
    ) {
      return parseResponse(
        client[':projectId'].detect.iterations[':publishedName'].image.$post(args, options),
      )
    },
  })
}

export function injectPostProjectIdDetectIterationsPublishedNameImage<
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
                ReturnType<
                  (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['$post']
        >,
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
    const mutationDefaults = getPostProjectIdDetectIterationsPublishedNameImageMutationOptions<
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

export function getPostProjectIdDetectIterationsPublishedNameImageNostoreMutationKey() {
  return [
    ':projectId',
    '/:projectId/detect/iterations/:publishedName/image/nostore',
    'POST',
  ] as const
}

export function getPostProjectIdDetectIterationsPublishedNameImageNostoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['nostore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectIdDetectIterationsPublishedNameImageNostoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['nostore']['$post']
      >,
    ) {
      return parseResponse(
        client[':projectId'].detect.iterations[':publishedName'].image.nostore.$post(args, options),
      )
    },
  })
}

export function injectPostProjectIdDetectIterationsPublishedNameImageNostore<
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
                ReturnType<
                  (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['nostore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['nostore']['$post']
        >,
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
    const mutationDefaults =
      getPostProjectIdDetectIterationsPublishedNameImageNostoreMutationOptions<
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

export function getPostProjectIdDetectIterationsPublishedNameUrlMutationKey() {
  return [':projectId', '/:projectId/detect/iterations/:publishedName/url', 'POST'] as const
}

export function getPostProjectIdDetectIterationsPublishedNameUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectIdDetectIterationsPublishedNameUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['$post']
      >,
    ) {
      return parseResponse(
        client[':projectId'].detect.iterations[':publishedName'].url.$post(args, options),
      )
    },
  })
}

export function injectPostProjectIdDetectIterationsPublishedNameUrl<
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
                ReturnType<
                  (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['$post']
        >,
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
    const mutationDefaults = getPostProjectIdDetectIterationsPublishedNameUrlMutationOptions<
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

export function getPostProjectIdDetectIterationsPublishedNameUrlNostoreMutationKey() {
  return [':projectId', '/:projectId/detect/iterations/:publishedName/url/nostore', 'POST'] as const
}

export function getPostProjectIdDetectIterationsPublishedNameUrlNostoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['nostore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectIdDetectIterationsPublishedNameUrlNostoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['nostore']['$post']
      >,
    ) {
      return parseResponse(
        client[':projectId'].detect.iterations[':publishedName'].url.nostore.$post(args, options),
      )
    },
  })
}

export function injectPostProjectIdDetectIterationsPublishedNameUrlNostore<
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
                ReturnType<
                  (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['nostore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['nostore']['$post']
        >,
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
    const mutationDefaults = getPostProjectIdDetectIterationsPublishedNameUrlNostoreMutationOptions<
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
