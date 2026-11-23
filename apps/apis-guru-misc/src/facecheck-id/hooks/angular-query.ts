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

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiDeletePicMutationKey() {
  return ['api', '/api/delete_pic', 'POST'] as const
}

export function getPostApiDeletePicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.delete_pic.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.delete_pic.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDeletePicMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.delete_pic.$post>) {
      return parseResponse(client.api.delete_pic.$post(args, options))
    },
  })
}

export function injectPostApiDeletePic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.delete_pic.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.delete_pic.$post>,
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
    const mutationDefaults = getPostApiDeletePicMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiInfoMutationKey() {
  return ['api', '/api/info', 'POST'] as const
}

export function getPostApiInfoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.info.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiInfoMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.info.$post(undefined, options))
    },
  })
}

export function injectPostApiInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.info.$post>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getPostApiInfoMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiSearchMutationKey() {
  return ['api', '/api/search', 'POST'] as const
}

export function getPostApiSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.search.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.search.$post>) {
      return parseResponse(client.api.search.$post(args, options))
    },
  })
}

export function injectPostApiSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.search.$post>,
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
    const mutationDefaults = getPostApiSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiUploadPicMutationKey() {
  return ['api', '/api/upload_pic', 'POST'] as const
}

export function getPostApiUploadPicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.upload_pic.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.upload_pic.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUploadPicMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.upload_pic.$post>) {
      return parseResponse(client.api.upload_pic.$post(args, options))
    },
  })
}

export function injectPostApiUploadPic<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.upload_pic.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.upload_pic.$post>,
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
    const mutationDefaults = getPostApiUploadPicMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
